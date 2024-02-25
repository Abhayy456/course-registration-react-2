import { AddSubjectFormContainer } from "../components/addSubject/AddSubjectFormContainer";
import { AddSubjectHeader } from "../components/addSubject/AddSubjectHeader";
// import { useOutletContext } from "react-router-dom";
// import * as abc from "../components/Courses";
export function AddSubject() {
  // const context=useOutletContext();
  return (
    <>
    {/* <abc.NavBar></abc.NavBar> */}
      <AddSubjectHeader />
      <AddSubjectFormContainer />;
    </>
  );
}
