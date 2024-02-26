import {  useContext } from "react";
import { RegisteredContext } from "../../../hooks/useRegistered"
import { RegisteredCoursesCard } from "./registeredCoursesCard/RegisteredCoursesCard";
import "./RegisteredCourses.css";
export const RegisteredCourses = () =>{
    const [registered, ]=useContext(RegisteredContext);
    console.log(registered);
    return(
        <>
        <div>
            <div className="header">
                <div className="header__subject-name-column">Subject Name</div>
                <div className="header__subject-branch-column">Subject Branch</div>
                <div className="header__subject-credits-column">Subject Credits</div>
                <div className="header__action-column">Action</div>
            </div>
            {registered.map((subject) => {
                return <RegisteredCoursesCard subject={subject} key={subject.id} />
            })}
        </div>
        </>
    )
};