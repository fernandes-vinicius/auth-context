import { api } from "../../services/api";
import { IUser } from "./types";

const userStorageKey = "u";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem(userStorageKey, JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem(userStorageKey);

  if (!json) return null;

  const user = JSON.parse(json) as IUser;

  return user ?? null;
}

export async function loginRequest(email: string, password: string) {
  try {
    const request = await api.post("login", { email, password });

    return request.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
