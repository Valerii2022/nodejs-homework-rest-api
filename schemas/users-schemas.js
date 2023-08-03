import Joi from "joi";

const userRegisterSchema = Joi.object({
  email: Joi.string()
    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    .required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
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

export const userSchemas = {
  userRegisterSchema,
  userLoginSchema,
  updateSubscriptionSchema,
};
