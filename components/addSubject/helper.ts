import { Subject } from "../../types/interface";
export const addSubjectFormValidation = (subject: Subject) => {
  const { subjectName, subjectCode, subjectBranch, subjectCredits } = subject;
  return (
    subjectName.trim().length !== 0 &&
    !Number.isNaN(+subjectCredits) &&
    subjectBranch.trim().length !== 0 &&
    subjectCode.trim().length !== 0
  );
};

export const initializeSubject = (): Subject => {
  return {
    subjectId: crypto.randomUUID(),
    subjectName: "",
    subjectBranch: "",
    subjectCode: "",
    subjectCredits: 0,
  };
};
