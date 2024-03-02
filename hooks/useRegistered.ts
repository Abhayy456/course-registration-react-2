import { createContext, useContext } from "react";
import { RegisteredContextType } from "../types/interface";

export const RegisteredContext = createContext<RegisteredContextType | null>(
  null,
);
export const useRegistered = () => {
  const context = useContext(RegisteredContext);
  if (!context) {
    throw new Error("The Component is not wrapped with RegisteredContext");
  }
  return context;
};
