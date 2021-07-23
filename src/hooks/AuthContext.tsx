import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";
import jwt from "jsonwebtoken";

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface AuthContext {
  user: User;
  signIn(credentials: SignInCredentials): Promise<any>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
}

const authContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@PraeMananger:token");

    const user = localStorage.getItem("@PraeMananger:user");

    if (token && user) {
      const decoded: any = jwt.decode(token);

      if (decoded.exp * 1000 < Date.now()) {
        localStorage.clear();
      } else {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, user: JSON.parse(user) };
      }
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem("@PraeMananger:token");
    localStorage.removeItem("@PraeMananger:user");
    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("@PraeMananger:token", token);
      localStorage.setItem("@PraeMananger:user", JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
      return {};
    } catch (err) {
      return {
        message: "Invalid Credentials",
      };
    }
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@GoBarber:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <authContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default authContext;
