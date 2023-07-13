import { tokenKey } from "../config";
import ApiFetch from "./apiFetch";

export async function createUser(userData) {
  const { token, ...user } = await ApiFetch("/signup", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await ApiFetch("/profile");

  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await ApiFetch("/profile", {
    method: "PATCH",
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}
