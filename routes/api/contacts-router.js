import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import contactsAddSchema from "../../schemas/contacts-schema.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.update
);

router.delete("/:contactId", contactsController.deleteById);

export default router;
