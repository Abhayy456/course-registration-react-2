import React from "react";
import { AddSubject } from "./AddSubject";
import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <div className="login">
                <Link to={"/AddSubject"}>Admin</Link>
                <Link to={"/Courses"}>Student</Link>
            </div>
        </>
    )
}