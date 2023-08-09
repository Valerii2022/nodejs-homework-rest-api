import { Schema, model } from "mongoose";
import { handleMongooseError, validateAtUpdate } from "./hook.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      // required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

userSchema.pre("findOneAndUpdate", validateAtUpdate);

userSchema.post("findOneAndUpdate", handleMongooseError);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

export default User;
