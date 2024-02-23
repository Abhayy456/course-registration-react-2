
import { useLocalStorage } from '../hooks/useLocalStorage'
import { AddSubject } from '../pages/AddSubject'
import { Courses } from '../pages/Courses';
import { Home } from '../pages/Home';
import { Outlet } from 'react-router';
import './App.css'
import {
  SUBJECTS_DEFAULT_INITIAL_VALUE,
  SUBJECTS_LOCAL_STORAGE_KEY,
} from "../components/utilities/constants"
import { SubjectsContext } from '../hooks/useSubject';


export default function App(){
  const [subjects, setSubjects] = useLocalStorage(
    SUBJECTS_LOCAL_STORAGE_KEY,
    SUBJECTS_DEFAULT_INITIAL_VALUE
  );

  return (
    <SubjectsContext.Provider value={[subjects, setSubjects]}>
      <Courses/>
      {/* <AddSubject /> */}
    </SubjectsContext.Provider>
  )
}
