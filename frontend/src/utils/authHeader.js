export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token === 0) return {};

  return { "x-access-token": user.token };
}
