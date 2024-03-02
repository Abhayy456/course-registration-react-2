import React from "react";
import { useContext } from "react";
import "./Subjects.css";
import { SubjectCard } from "./subjectCard/SubjectCard";
import { SubjectsContext } from "../../../hooks/useSubject";
import { Subject } from "../../../types/interface";

export const Subjects = () => {
  const [subjects] = useContext(SubjectsContext);
  return (
    <div className="subjects-list">
      <div className="subjects-list__header">
        <div className="subjects-list__header-name-column">Subject Name</div>
        <div className="subjects-list__header-code-column">Subject Code</div>
        <div className="subjects-list__header-branch-column">
          Subject Branch
        </div>
        <div className="subjects-list__header-credits-column">
          Subject Credits
        </div>
      </div>
      <div>
        {subjects.map((subject: Subject) => {
          return <SubjectCard subject={subject} key={subject.subjectId} />;
        })}
      </div>
    </div>
  );
};
