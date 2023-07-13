import { tokenKey } from "../config";
import ApiFetch from "./apiFetch";

export async function login(credentials) {
  const { token, ...user } = await ApiFetch("/login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await ApiFetch("/logout", { method: "DELETE" });
}
