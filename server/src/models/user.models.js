import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
   },
   fullname: {
    type: String,
    required: true,
    trim: true,
   },
   password: {
    type: String,
    required: [true, "Password is required"]
   },
   isEmailVerified: {
    type: Boolean,
    default: false,
   },
   refreshToken: {
    type: String,
   },
   forgotPasswordToken: {
    type: String,
   },
   forgotPasswordExpiry: {
    type: Date,
   }, 
   emailVerificationToken: {
    type: String,
   },
   emailVerificationExpiry: {
    type: Date,
   }
  }, {
    timestamps: true
  }
);

export const User = mongoose.model("User", userSchema);