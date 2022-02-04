import db from "../../db/db.js";

export const registerUser = async (email, password) => {
  const [id] = await db("User")
    .insert({
      email,
      password,
    })
    .returning("id");

  return id;
};

export const getUser = async (email) => {
  const user = await db("User").where({ email: email });
  return user[0];
};
