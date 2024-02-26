import React, { useContext, useEffect, useState} from "react";
import "./Subjects.css";
import {SubjectCard} from "./subjectCard/SubjectCard"
import { SubjectsContext, useSubject } from "../../../hooks/useSubject";

export const Subjects = () => {
    const [subjects]=useContext(SubjectsContext);
    console.log(subjects);
    return (
        <div className="subjects-list">
            <div class="subjects-list__header">
                <div class="subjects-list__header-name-column">Subject Name</div>
                <div class="subjects-list__header-code-column">Subject Code</div>
                <div class="subjects-list__header-branch-column">Subject Branch</div>
                <div class="subjects-list__header-credits-column">Subject Credits</div>
            </div>
            <div>
                {subjects.map((subject) => {
                    return <SubjectCard subject={subject} key={subject.subjectId} />
                })}
            </div>
        </div>
    );
};