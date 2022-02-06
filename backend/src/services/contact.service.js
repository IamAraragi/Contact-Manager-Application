import * as ContactModel from "../models/contact.model.js";

export const addContact = (contactInfo) => {
  return ContactModel.addContact(contactInfo);
};

export const getAllContacts = async (userId) => {
  const contacts = await ContactModel.getAllContacts(userId);
  return contacts;
};

export const deleteContactById = async (contactId) => {
  const contactFound = await ContactModel.deleteContactById(contactId);
  return contactFound;
};

export const updateContactById = async (contactId, contactData) => {
  const contact = await ContactModel.findContactById(contactId);
  if (!contact) return false;

  await ContactModel.updateContactById(contactId, contactData);
  return true;
};
