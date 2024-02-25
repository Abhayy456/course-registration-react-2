import { createContext, useContext } from "react";

export const RegisteredContext = createContext(null);

export const useCart = () => {
  const context = useContext(RegisteredContextContext);
  if (!context) {
    throw new Error("The Component is not wrapped with RegisteredContext");
  }
  return context;
};
