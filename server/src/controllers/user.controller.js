import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { emailVerificationMailgenContent, sendEmail } from "../utils/mail.js";
import { generateAccessAndRefreshTokens } from "./auth.controllers.js";


// Register User
const registerUser = asyncHandler(async(req, res) => {
  const { email, username, fullname, password, role } = req.body;

  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
  });

  if(existedUser){
    throw new ApiError(409, "User already exists", [])
  }

  const user = await User.create({
    email,
    username,
    fullname,
    password,
    isEmailVerified: false
  });

  const { unHashedToken, hashedToken, tokenExpiry } = user.generateTemporaryToken();

  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpiry = tokenExpiry;

  await user.save({ validateBeforeSave: false });

  await sendEmail(
    {
      email: user?.email,
      subject: "Please verify your email",
      mailgenContent: emailVerificationMailgenContent(
        user.fullname,
        `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`
      )
    }
  );

  const createdUser = await User.findById(user._id).select("-password -refreshToken -emailVerificationToken  -emailVerificationExpiry");

  if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering a user")
  }

  return res  
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User registered successfully and verification email has been sent on your email"
      )
    )
});

// Login User
const login = asyncHandler(async(req, res) => {
  const { email, username, password } = req.body;

  if ((!email && !username) || !password) {
    throw new ApiError(400, "Email or Username and password are required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }]
  });

  if(!user){
    throw new ApiError(400, "User does not exist")
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if(!isPasswordValid){
    throw new ApiError(400, "Invalid Credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken -emailVerificationToken  -emailVerificationExpiry");
  
  const options = {
    httpOnly: true,
    secure: true
  }

  return res  
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken
        },
      ),
      "User logged in successfully"
    )
});

// Logout User
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: ""
      }
    },
    {
      new: true
    },
  );
  const options = {
    httpOnly: true,
    secure: true
  }
  return res  
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
      new ApiResponse(
        200, 
        {}, 
        "User logged out"
      )
    );
});

// Current User
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        req.user,
        "Current user fetched successfully"
      )
    )
})


export {
  registerUser,
  login,
  logoutUser,
  getCurrentUser,
}