import db from "../../db/db.js";

/**
 * Function to add the contacts to the database
 * @param {*} contactInfo: contact info to be added to the database
 * @returns
 */
export const addContact = async (contactInfo) => {
  const { user_id, name, phone, photo, email, address } = contactInfo;
  const [id] = await db("Contact")
    .insert({
      user_id,
      name,
      phone,
      photo,
      email,
      address,
    })
    .returning("id");

  return id;
};

/**
 * Function to get all contacts of the user from the database using user id
 * @param {*} userId: id of the user
 * @returns
 */
export const getAllContacts = async (userId) => {
  const contacts = await db("Contact")
    .select("id", "name", "phone", "photo", "email", "address", "favorites")
    .where({ user_id: userId });
  return contacts;
};

/**
 * Function to delete the contact from the database
 * @param {*} contactId id of the contact to be deleted
 * @returns
 */
export const deleteContactById = async (contactId) => {
  const contactFound = await db("Contact")
    .select("*")
    .where({ id: contactId })
    .del();

  return contactFound;
};

/**
 * function to get a contact from database using contact id
 * @param {*} contactId: id of a contact to be found
 * @returns
 */
export const findContactById = async (contactId) => {
  const contact = await db("Contact").select("*").where({ id: contactId });
  return contact;
};

/**
 * Function to update the contact in database using contact id
 * @param {*} contactId
 * @param {*} contactData: new data to be updated in database
 */
export const updateContactById = async (contactId, contactData) => {
  await db("Contact").where({ id: contactId }).update(contactData);
};
