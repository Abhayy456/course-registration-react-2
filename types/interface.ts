import { Dispatch, SetStateAction } from "react";
export interface Subject {
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  subjectBranch: string;
  subjectCredits: number;
}

// type UpdateSubjectsFunctionType = {
//     (newSubjects : Subject[]): void;
// }
export type RegisteredContextType = [
  Subject[],
  Dispatch<SetStateAction<Subject[]>>,
];
export type SubjectContextType = [
  Subject[],
  Dispatch<SetStateAction<Subject[]>>,
];
