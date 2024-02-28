"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { addDays } from "date-fns";
import { User } from "@/models/user";
import { whoAmI } from "@/services/who-am-i";
import { login } from "@/services/login";

type AuthProviderProps = {
  children: ReactNode;
};

interface LoginFormInput {
  email: string;
  password: string;
}

type AuthContextData = {
  token: string | undefined;
  setToken: (value: string | undefined) => void;
  //
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  //
  user: User | null;
  setUser: (value: User | null) => void;
  //
  handleVerifySession: () => void;
  //
  handleLogin: (value: LoginFormInput) => void;
  handleLoggout: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  const handleLogin = async (values: LoginFormInput) => {
    login(values).then(({ data, status }) => {
      if (status === 200) {
        Cookies.set("token", data.token, {
          expires: addDays(new Date(), 24),
        });

        setToken(data.token);
        setIsAuthenticated(true);
      }
    });
  };

  const handleVerifySession = async () => {
    whoAmI({ token })
      .then(({ data }) => {
        setUser(data);

        setIsAuthenticated(true);

        return;
      })
      .catch(() => handleLoggout());
  };

  const handleLoggout = () => {
    Cookies.remove("token");
    localStorage.clear();

    setUser(null);
    setToken(undefined);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (token) handleVerifySession();
    else handleLoggout();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        //
        isAuthenticated,
        setIsAuthenticated,
        //
        user,
        setUser,
        //
        handleVerifySession,
        //
        handleLogin,
        handleLoggout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
