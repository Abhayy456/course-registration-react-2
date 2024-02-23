import "./SubjectCard.css";
import { register } from "./helper";

export const SubjectCard = ({ subject }) => {
    const handleRegister = () => {
        register(subject);
    }
    return (
        <div className="subject">
            <div className="subject__name">
                {subject.subjectName}
            </div>
            <div className="subject__branch">
                {subject.subjectBranch}
            </div>
            <div className="subject__code">
                {subject.subjectCode}
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
        </div>
    )
}