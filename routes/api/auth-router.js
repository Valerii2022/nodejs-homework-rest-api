import express from "express";
import authController from "../../controllers/auth-controller.js";
import {
  isEmptyBody,
  authenticate,
  upload,
  resizeAvatar,
} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSchemas } from "../../schemas/users-schemas.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatarURL"),
  resizeAvatar,
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

authRouter.patch(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(userSchemas.updateSubscriptionSchema),
  authController.updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  resizeAvatar,
  validateBody(userSchemas.updateAvatarSchema),
  authController.updateAvatar
);

authRouter.get("/verify/:verificationToken", authController.verifyEmail);

authRouter.post(
  "/verify",
  validateBody(userSchemas.emailSchema),
  authController.resendVerifyEmail
);

export default authRouter;
