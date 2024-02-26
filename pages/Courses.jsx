import React from "react";

import {NavBar, Subjects} from "../components/courses/index.js"
import { SubjectsContext, useSubject } from "../hooks/useSubject.js";
import "../src/App.css"

export function Courses() {
    const [subjects]=useSubject(SubjectsContext);
    return (
        <>
            <NavBar />
            <Subjects />
        </>
    )
}