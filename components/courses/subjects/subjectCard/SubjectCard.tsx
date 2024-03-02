import React, { useCallback } from "react";
import "./SubjectCard.css";
import { register } from "../../helper";
import { RegisteredContext } from "../../../../hooks/useRegistered";
import { useContext } from "react";
import { Subject } from "../../../../types/interface";

type SubjectCardProps = {
  subject: Subject;
};

export const SubjectCard = ({ subject }: SubjectCardProps) => {
  const [registered, setRegistered] = useContext(RegisteredContext);
  // console.log(RegisteredContext);
  const handleRegister = useCallback(() => {
    const registeredNew = register(subject);
    setRegistered(registeredNew);
  }, [subject, register, setRegistered, registered]);
  return (
    <li className="subject">
      <div className="subject__name">{subject.subjectName}</div>
      <div className="subject__code">{subject.subjectCode}</div>
      <div className="subject__branch">{subject.subjectBranch}</div>
      <div className="subject__credits">{subject.subjectCredits}</div>
      <button onClick={handleRegister} className="subject__register-btn">
        Register
      </button>
    </li>
  );
};
