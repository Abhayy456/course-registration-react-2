import { Link } from "react-router-dom";
// import React from "react";
// import { Subjects } from "../subjects/Subjects";
import "./NavBar.css"

export const NavBar = () => {
    return (
            <nav className="nav">
                <div className="nav__courses">Courses</div>
                <div className="nav__search-bar">
                    <input
                        className="nav__search-input"
                        type="text"
                        placeholder="Search Subjects"
                        aria-label="Search Bar"
                    />
                    <button className="nav__search-button">
                        Search
                    </button>
                </div>
                <Link className="nav__manage-courses-link" to={"/manageCourses"}>Manage Courses</Link>
                <Link to={"/"}>LogOut</Link>
            </nav>
    )
}