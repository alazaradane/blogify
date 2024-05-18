import axios from "axios";
import { createContext, useEffect, useState } from "react";
import backendUrl from "../../api/index";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async(input) => {
    const res = await axios.post(`${backendUrl}/auth/login`, input,);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post(`${backendUrl}/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};


