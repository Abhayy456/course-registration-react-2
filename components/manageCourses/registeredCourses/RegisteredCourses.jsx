import { useCallback, useContext, useState } from "react";
import { RegisteredContext } from "../../../hooks/useRegistered"
import { RegisteredCoursesCard } from "./registeredCoursesCard/RegisteredCoursesCard";
import "./RegisteredCourses.css";
export const RegisteredCourses = () =>{
    const [registered, setRegistered]=useContext(RegisteredContext);
    console.log(registered);
    return(
        <>
        <div>
            <div class="header">
                <div class="header__subject-name-column">Subject Name</div>
                <div class="header__subject-branch-column">Subject Branch</div>
                <div class="header__subject-credits-column">Subject Credits</div>
                <div class="header__action-column">Action</div>
            </div>
            {registered.map((subject) => {
                return <RegisteredCoursesCard subject={subject} />
            })}
        </div>
        </>
    )
};