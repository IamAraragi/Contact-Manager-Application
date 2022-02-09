/**
 * Function to sort the contact list based on the favorites first then by alphabetical order
 * @param {*} contacts
 * @returns
 */

export const sortTable = (contacts) => {
  const sortedObjects = contacts.sort((a, b) => {
    if (b.favorites - a.favorites > 0) return 1;
    if (b.favorites - a.favorites < 0) return -1;

    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return sortedObjects;
};
