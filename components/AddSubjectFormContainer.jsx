import { useReducer, useCallback } from "react";
import { useSubject } from "../hooks/useSubject";
import { subjectReducer } from "./reducer.js";

import {
    ACTIONS,
    EventIDActionsType,
    SUBJECT_ADDITION_FAILURE_MESSAGE,
    SUBJECT_ADDITION_SUCCESS_MESSAGE,
} from "./constants.js";

import { addSubjectFormValidation, initializeSubject} from "./helper.js";
import { AddSubjectForm } from "./AddSubjectForm.jsx";

export const AddSubjectFormContainer = () => {
    const [subjects, setSubjects] = useSubject();

    const [subject, dispatch] = useReducer(subjectReducer, {}, initializeSubject);

    const handleAddSubjectForm = useCallback(
        (event) => {
            event.preventDefault();
            if(addSubjectFormValidation(subject)) {
                setSubjects([...subjects, subject]);
                dispatch({ type: ACTIONS.RESET_STATE });
                alert(SUBJECT_ADDITION_SUCCESS_MESSAGE);
            }
            else{
                alert(SUBJECT_ADDITION_FAILURE_MESSAGE);
            }
        },
        [subjects, subject, setSubjects]
    );

    const handleFormElementChange = useCallback(
        (event) => {
            const payload = event.target.value;
            const id = event.target.id;
            const type = EventIDActionsType.get(id);
            dispatch({ type, payload });
        },
        [dispatch]
    );
    return (
        <AddSubjectForm 
            handleAddSubjectForm={handleAddSubjectForm}
            handleFormElementChange={handleFormElementChange}
            subject={subject}
        />
    );
};
