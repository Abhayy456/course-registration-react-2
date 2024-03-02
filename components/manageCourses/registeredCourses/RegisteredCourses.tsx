import React from "react";
import { useContext } from "react";
import { RegisteredContext } from "../../../hooks/useRegistered";
import { RegisteredCoursesCard } from "./registeredCoursesCard/RegisteredCoursesCard";
import "./RegisteredCourses.css";
import { Subject } from "../../../types/interface";

export const RegisteredCourses = () => {
  const [registered] = useContext(RegisteredContext);
  return (
    <>
      <div>
        <div className="header">
          <div className="header__subject-name-column">Subject Name</div>
          <div className="header__subject-branch-column">Subject Branch</div>
          <div className="header__subject-credits-column">Subject Credits</div>
          <div className="header__action-column">Action</div>
        </div>
        {registered.map((subject: Subject) => {
          return (
            <RegisteredCoursesCard subject={subject} key={subject.subjectId} />
          );
        })}
      </div>
    </>
  );
};
