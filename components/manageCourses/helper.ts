import { initializeRegistered } from "../courses/helper";
import { Subject } from "../../types/interface";
export const drop = (subject: Subject) => {
  const registered = initializeRegistered();
  const updatedRegistered = registered.filter(
    (subjectInRegistered) =>
      subject.subjectId !== subjectInRegistered.subjectId,
  );

  alert("Subject Dropped Successfully!");
  localStorage.setItem("registered", JSON.stringify(updatedRegistered));
  return updatedRegistered;
};
