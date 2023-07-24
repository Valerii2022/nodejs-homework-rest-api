import { Schema, model } from "mongoose";
import { handleMongooseError, validateAtUpdate } from "./hook.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.pre("findOneAndUpdate", validateAtUpdate);

contactSchema.post("findOneAndUpdate", handleMongooseError);
contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

export default Contact;
