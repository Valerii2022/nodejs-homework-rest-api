import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import {
  isEmptyBody,
  isValidId,
  authenticate,
  upload,
} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { schemas } from "../../schemas/contacts-schema.js";

const router = express.Router();

router.get("/", authenticate, contactsController.getAll);

router.get("/:id", authenticate, isValidId, contactsController.getById);

router.post(
  "/",
  upload.single("avatar"),
  authenticate,
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.update
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, contactsController.deleteById);

export default router;
