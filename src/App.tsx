import { useLocalStorage } from "../hooks/useLocalStorage";
import { Outlet } from "react-router";
import "./App.css";
import {
  SUBJECTS_DEFAULT_INITIAL_VALUE,
  SUBJECTS_LOCAL_STORAGE_KEY,
} from "../components/utilities/constants";
import { SubjectsContext } from "../hooks/useSubject";
import { initializeRegistered } from "../components/courses/helper";
import { RegisteredContext } from "../hooks/useRegistered";
import { useState } from "react";
import React from "react";

export default function App() {
  const [registered, setRegistered] = useState(initializeRegistered());
  const [subjects, setSubjects] = useLocalStorage(
    SUBJECTS_LOCAL_STORAGE_KEY,
    SUBJECTS_DEFAULT_INITIAL_VALUE,
  );

  return (
    <SubjectsContext.Provider value={[subjects, setSubjects]}>
      <RegisteredContext.Provider value={[registered, setRegistered]}>
        <Outlet />
      </RegisteredContext.Provider>
    </SubjectsContext.Provider>
  );
}
