import db from "../../db/db.js";

/**
 * Function to add the user data to the database
 * @param {*} email: email of the user
 * @param {*} password: password of the user
 * @returns
 */
export const registerUser = async (email, password) => {
  const [id] = await db("User")
    .insert({
      email,
      password,
    })
    .returning("id");

  return id;
};

/**
 * Function to get user from the database
 * @param {*} email
 * @returns
 */
export const getUser = async (email) => {
  const user = await db("User").where({ email: email });
  return user[0];
};
