/**
 * Function to get contact id of the selected contact from the table
 * @param {*} contactId
 * @returns
 */

export const selectedContact = (contactId) => {
  const contacts = JSON.parse(localStorage.getItem("contacts"));

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["id"] === contactId) {
      return contacts[i];
    }
  }
};
