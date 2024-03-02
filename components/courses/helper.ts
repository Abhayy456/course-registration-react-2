import { Subject } from "../../types/interface";

export const initializeRegistered = (): Subject[] => {
  const Registered = window.localStorage.getItem("registered")
    ? JSON.parse(window.localStorage.getItem("registered"))
    : [];
  return Registered;
};

export const register = (subject: Subject): Subject[] => {
  const registered = initializeRegistered();
  const alreadyRegistered = registered.find(
    (alreadyRegistered) => alreadyRegistered.subjectId === subject.subjectId,
  );
  let updatedRegistered = registered;
  if (alreadyRegistered) {
    alert("Subject Already Registered!");
  } else {
    updatedRegistered = [...registered, subject];
    alert("Subject Registered!");
  }
  window.localStorage.setItem("registered", JSON.stringify(updatedRegistered));
  return updatedRegistered;
};
