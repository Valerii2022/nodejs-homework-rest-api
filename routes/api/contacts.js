import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";

import { validateBody } from "../../decorators/index.js";

import { isEmptyBody } from "../../middlewars/index.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

router.delete("/:contactId", contactsController.deleteByid);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsSchemas.moviesAddSchema),
  contactsController.updateById
);

export default router;
