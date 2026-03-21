import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { emailVerificationMailgenContent, sendEmail } from "../utils/mail.js";


const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params;

  if(!verificationToken) {
    throw new ApiError(400, "Email verification token is missing");
  };

  let hashedToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpiry: { $gt: Date.now() }
  });

  if(!user){
    throw new ApiError(400, "Token is invalid or expired");
  }

  user.emailVerificationToken = undefined;
  user.emailVerificationExpiry = undefined;

  user.isEmailVerified = true;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {
          isEmailVerified: true,
        },
        "Email is verified",
      )
    )
});

const resendEmailVerification = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id);

  if(!user){
    throw new ApiError(404, "user does not exist")
  }

  if(user.isEmailVerified){
    throw new ApiError(409, "Email is already verified")
  }

  const { unHashedToken, hashedToken, tokenExpiry } = user.generateTemporaryToken();

  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpiry = tokenExpiry;

  await user.save({ validateBeforeSave: false });

  await sendEmail({
    email: user?.email,
    subject: "Please verify your email",
    mailgenContent: emailVerificationMailgenContent(
      user.fullname,
      `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`,
    ),
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        "Mail has been sent to your email ID",
      )
    )
});


export {
  verifyEmail,
  resendEmailVerification,
}