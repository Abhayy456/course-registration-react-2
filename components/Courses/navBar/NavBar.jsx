import { Link } from "react-router-dom";
import React from "react";
import { Subjects } from "../subjects/Subjects";
  

export const NavBar = () => {
    return (
            <nav className="nav">
                <div className="nav__courses">Courses</div>
                <div className="nav__search-bar">
                    <input
                        className="nav__seach-input"
                        type="text"
                        placeholder="Search Subjects"
                        aria-label="Search Bar"
                    />
                </div>
                <Link to={"/manageCourses"}>Manage Courses</Link>
                {/* <Routes>
                    <Route path="/Subjects"> <Subjects /> </Route>
                </Routes> */}
            </nav>
    )
}