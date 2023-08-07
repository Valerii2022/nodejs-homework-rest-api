import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import {
  isEmptyBody,
  isValidId,
  authenticate,
} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { schemas } from "../../schemas/contacts-schema.js";

const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAll);

router.get("/:id", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.add
);

router.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.update
);

router.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

router.delete("/:id", isValidId, contactsController.deleteById);

export default router;
