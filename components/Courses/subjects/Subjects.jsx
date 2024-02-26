import React, { useContext, useEffect, useState} from "react";
import "./Subjects.css";
import {SubjectCard} from "./subjectCard/SubjectCard"
import { SubjectsContext, useSubject } from "../../../hooks/useSubject";

export const Subjects = () => {
    const [subjects]=useContext(SubjectsContext);
    console.log(subjects);
    return (
        <div>
            console.log(subjects);
            {subjects.map((subject) => {
                return <SubjectCard subject={subject} key={subject.subjectId} />
            })}
        </div>
    );
};