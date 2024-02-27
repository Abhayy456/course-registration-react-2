import { initializeRegistered } from "../courses/helper";
// import { RegisteredContext } from "../../hooks/useRegistered";
export const drop = (subject) => {
  const registered = initializeRegistered();
  let index = 0;
  let totalCredits = localStorage.getItem("totalCredits");

  registered.forEach((subjectInArray) => {
    if (subjectInArray.id === subject.id) {
      totalCredits -= subject.credits;
      localStorage.setItem("totalCredits", JSON.stringify(totalCredits));
      return;
    }
    index++;
  });
  registered.splice(index, 1);

  alert("Subject Dropped Successfully!");
  localStorage.setItem("registered", JSON.stringify(registered));
  console.log({ registered });
  return registered;
};
