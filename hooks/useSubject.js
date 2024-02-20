import { createContext, useContext } from "react";

export const SubjectsContext = createContext(null);

export const useSubject = () => {
    const context = useContext(SubjectsContext);
    if(!context) {
        throw new Error("The Component is not wrapped with Subjects Context");
    }
    return context;
};