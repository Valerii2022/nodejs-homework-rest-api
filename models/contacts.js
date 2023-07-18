// import { readFile, writeFile } from "fs/promises";
// import { nanoid } from "nanoid";
// import path from "path";

// const contactsPath = path.resolve("models", "contacts.json");

// // -----------------------------------------------------------------------
// const updateContactsExample = (contacts) =>
//   writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// // -----------------------------------------------------------------------------

// export const listContacts = async () => {
//   console.log("listContacts running");
//   const data = await readFile(contactsPath, "utf-8");
//   return JSON.parse(data);
// };

// export const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const result = contacts.find((item) => item.id === contactId);
//   return result || null;
// };

// export const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   // ================================================
//   await updateContactsExample(contacts);
//   // ==========================================
//   return result;
// };

// export const addContact = async ({ name, email, phone }) => {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await updateContactsExample(contacts);
//   return newContact;
// };

// export const updateContact = async (contactId, body) => {};

// // export default {
// //   listContacts,
// //   getContactById,
// //   removeContact,
// //   addContact,
// //   updateContact,
// // };

import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts.json");

const updateContactsStorage = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

export const addContact = async ({ title, director }) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    title,
    director,
  };
  contacts.push(newContact);
  await updateContactsStorage(contacts);
  return newContact;
};

export const updateContact = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await updateContactsStorage(contacts);
  return contacts[index];
};

export const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContactsStorage(contacts);
  return result;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
