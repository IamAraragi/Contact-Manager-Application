/**
 * function to get user token from local storage
 * @returns object with user token
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return {};
  if (user && user.token === 0) return {};

  return { "x-access-token": user.token };
}
