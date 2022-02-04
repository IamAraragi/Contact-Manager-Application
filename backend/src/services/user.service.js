import * as UserModel from "../models/user.model.js";

export const registerUser = (userInfo) => {
  const { email, password } = userInfo;
  return UserModel.registerUser(email, password);
};

export const getUser = async (userEmail) => {
  const { id, email, password } = await UserModel.getUser(userEmail);
  return { id: id, email: email, password: password };
};
