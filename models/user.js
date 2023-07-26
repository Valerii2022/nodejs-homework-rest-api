import { Schema, model } from "mongoose";
import { handleMongooseError, validateAtUpdate } from "./hook.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", validateAtUpdate);

userSchema.post("findOneAndUpdate", handleMongooseError);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

export default User;
