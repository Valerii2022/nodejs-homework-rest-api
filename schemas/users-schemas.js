import Joi from "joi";

const userRegisterSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    .required(),
  password: Joi.string().required(),
  avatarURL: Joi.string(),
});

const userLoginSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    .required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().required(),
});

const updateAvatarSchema = Joi.object({
  avatarURL: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    .required()
    .messages({
      "any.required": "missing required field email",
    }),
});

export const userSchemas = {
  userRegisterSchema,
  userLoginSchema,
  updateSubscriptionSchema,
  updateAvatarSchema,
  emailSchema,
};
