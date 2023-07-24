import Joi from "joi";

const contactsAddSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "any.required": `"name" must be exist`,
    "string.min": `"name" should have a minimum length of 3`,
    "string.empty": `"name" cannot be an empty field`,
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ca", "uk", "org"] },
    })
    .required()
    .messages({
      "any.required": `"email" must be exist`,
      "string.empty": `"email" cannot be an empty field`,
      "string.email": `"email" must be a valid email - include "@", end with "com", "net", "ca", "uk", "org"`,
    }),
  phone: Joi.string()
    .regex(/[(0-9)]{3} [0-9]{3}-[0-9]{4}/)
    .messages({
      "string.pattern.base": `"phone" must be in format "(000) 000-0000" or "000 000-0000".`,
      "any.required": `"phone" must be exist`,
      "string.empty": `"phone" cannot be an empty field`,
    })
    .required(),
});

export default contactsAddSchema;
