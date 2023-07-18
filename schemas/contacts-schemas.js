import Joi from "joi";

const contactsAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"title" must be exist`,
  }),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

export default {
  contactsAddSchema,
};
