/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { drop } from "../../helper.js";
import { RegisteredContext } from "../../../../hooks/useRegistered.js";
import { useContext } from "react";
import "./RegisteredCoursesCard.css";
export const RegisteredCoursesCard = ({ subject }) => {
  const [, setRegistered] = useContext(RegisteredContext);
  const handleDrop = () => {
    const registeredNew = drop(subject);
    // {handle};
    // handleRegister=registered;
    setRegistered(registeredNew);
  };
  return (
    <div className="registered-course">
      <div className="registered-course__name">{subject.name}</div>
      <div className="registered-course__branch">{subject.branch}</div>
      {/* <div className="registered-course__code">
                {subject.code}
            </div> */}
      <div className="registered-course__credits">{subject.credits}</div>
      <button onClick={handleDrop} className="registered-course__drop-btn">
        Drop
      </button>
    </div>
  );
};
