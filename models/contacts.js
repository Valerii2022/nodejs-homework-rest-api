const { readFile } = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("models", "contacts.json");

const listContacts = async () => {
  console.log("listContacts running");
  const data = await readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
