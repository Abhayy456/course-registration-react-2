import { useCallback, useContext, useState } from "react";
import { RegisteredContext } from "../../hooks/useRegistered";
import { RegisteredCourseCard} from "./RegisteredCourseCard";

export const RegisteredCourses = () =>{
    const [registered, setRegistered]=useContext(RegisteredContext);
    // const [registeredCount, setRegisteredCount]=useState(registered.length);
    console.log(registered);
    // const handleCount=()=>{
    //     setRegisteredCount(--registeredCount);
    // }
    return(
        <>
        {/* <div>hello</div> */}
        <div>
            {registered.map((subject) => {
                return <RegisteredCourseCard subject={subject} />
            })}
        </div>
        </>
    )
};