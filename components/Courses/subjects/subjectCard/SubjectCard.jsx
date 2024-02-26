import "./SubjectCard.css";
import { register } from "../../helper.js";
import { RegisteredContext } from "../../../../hooks/useRegistered";
import { useContext } from "react";

export const SubjectCard = ({ subject }) => {
    const [, setRegistered] = useContext(RegisteredContext);
    const handleRegister = () => {
        const registeredNew = register(subject);
        setRegistered(registeredNew);
    }
    return (
        <li className="subject">
            <div className="subject__name">
                {subject.subjectName}
            </div>
            
            <div className="subject__code">
                {subject.subjectCode}
            </div>
            <div className="subject__branch">
                {subject.subjectBranch}
            </div>
            <div className="subject__credits">
                {subject.subjectCredits}
            </div>
            <button 
                onClick={handleRegister}
                className="subject__register-btn"
            >
                Register
            </button>
        </li>
    )
}