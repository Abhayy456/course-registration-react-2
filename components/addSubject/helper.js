export const addSubjectFormValidation = (subject) => {
    const { subjectName, subjectCode, subjectBranch, subjectCredits } = subject;
    return (
      subjectName.trim().length !== 0 &&
      !Number.isNaN(+subjectCredits) &&
      subjectBranch.trim().length !== 0 &&
      subjectCode.trim().length !== 0
    );
};

export const initializeSubject = () => {
    return {
      subjectId: crypto.randomUUID(),
      subjectName: "",
      subjectBranch: "",
      subjectCode: "",
      subjectCredits: "",
    };
  };