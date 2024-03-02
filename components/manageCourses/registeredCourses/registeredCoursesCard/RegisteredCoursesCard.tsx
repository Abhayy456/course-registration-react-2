/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useCallback } from "react";
import { drop } from "../../helper.js";
import { RegisteredContext } from "../../../../hooks/useRegistered.js";
import { useContext } from "react";
import "./RegisteredCoursesCard.css";
import { Subject } from "../../../../types/interface.js";

type RegisteredCoursesCardProps = {
  subject: Subject;
};

export const RegisteredCoursesCard = ({
  subject,
}: RegisteredCoursesCardProps) => {
  console.log({ subject });
  const [registered, setRegistered] = useContext(RegisteredContext);
  const handleDrop = useCallback(() => {
    const registeredNew = drop(subject);
    setRegistered(registeredNew);
  }, [subject, registered]);
  return (
    <div className="registered-course">
      <div className="registered-course__name">{subject.subjectName}</div>
      <div className="registered-course__branch">{subject.subjectBranch}</div>
      <div className="registered-course__credits">{subject.subjectCredits}</div>
      <button onClick={handleDrop} className="registered-course__drop-btn">
        Drop
      </button>
    </div>
  );
};
