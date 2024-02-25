
import { useLocalStorage } from '../hooks/useLocalStorage'
import { AddSubject } from '../pages/AddSubject'
// import { Courses } from '../pages/Courses';
import { Home } from '../pages/Home';
import { Outlet } from 'react-router';
import './App.css'
import {
  SUBJECTS_DEFAULT_INITIAL_VALUE,
  SUBJECTS_LOCAL_STORAGE_KEY,
} from "../components/utilities/constants"
import { SubjectsContext } from '../hooks/useSubject';
import { Route, Routes } from 'react-router-dom';
import { initializeRegistered } from '../components/Courses/helper';
import { RegisteredContext } from '../hooks/useRegistered';


export default function App(){
  const registered = initializeRegistered();
  const [subjects, setSubjects] = useLocalStorage(
    SUBJECTS_LOCAL_STORAGE_KEY,
    SUBJECTS_DEFAULT_INITIAL_VALUE
  );

  return (
    <SubjectsContext.Provider value={[subjects, setSubjects]}>
      {/* <RegisteredContext> */}
        <Outlet />
      {/* </RegisteredContext> */}
    </SubjectsContext.Provider>
  )
}
