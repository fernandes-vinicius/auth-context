import { createContext, useState } from "react";
import { IAuthContext, IAuthProviderProps, IUser } from "./types";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(() => {
    const u = getUserLocalStorage();

    if (u) {
      return u;
    }

    return null;
  });

  const authenticate = async (email: string, password: string) => {
    const response = await loginRequest(email, password);

    if (response) {
      const payload = { token: response.token, email };

      setUser(payload);
      setUserLocalStorage(payload);
    }
  };

  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
