import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSchemas } from "../../schemas/users-schemas.js";
import authenticate from "../../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userSchemas.userRegisterSchema),
  authController.register
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userSchemas.userLoginSchema),
  authController.login
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
