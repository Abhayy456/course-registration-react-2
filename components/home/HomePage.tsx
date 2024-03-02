import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <div className="login">
        <div className="login__admin">
          <Link className="login__admin-link" to={"/AddSubject"}>
            Admin
          </Link>
        </div>
        <div className="login__student">
          <Link className="login__student-link" to={"/courses"}>
            Student
          </Link>
        </div>
      </div>
    </>
  );
};
