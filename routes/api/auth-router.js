import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmptyBody, authenticate, upload } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSchemas } from "../../schemas/users-schemas.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatarURL"),
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
  upload.single("avatarURL"),
  authenticate,
  // isEmptyBody,
  validateBody(userSchemas.updateAvatarSchema),
  authController.updateAvatar
);

export default authRouter;
