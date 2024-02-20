
import { useLocalStorage } from '../hooks/useLocalStorage'
import { AddSubject } from '../pages/AddSubject'
import './App.css'
import {
  SUBJECTS_DEFAULT_INITIAL_VALUE,
  SUBJECTS_LOCAL_STORAGE_KEY,
} from "../components/utilities/constants.js"
import { SubjectsContext } from '../hooks/useSubject';


export default function App(){
  const [subjects, setSubjects] = useLocalStorage(
    SUBJECTS_LOCAL_STORAGE_KEY,
    SUBJECTS_DEFAULT_INITIAL_VALUE
  );

  return (
    <SubjectsContext.Provider value={[subjects, setSubjects]}>
      <AddSubject />
    </SubjectsContext.Provider>
  )
}
