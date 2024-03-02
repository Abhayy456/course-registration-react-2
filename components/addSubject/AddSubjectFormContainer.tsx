import React from "react";
import { useReducer, useCallback, ChangeEvent } from "react";
import { useSubject } from "../../hooks/useSubject";
import { subjectReducer } from "./reducer";

import {
  ACTIONS,
  EventIDActionsType,
  SUBJECT_ADDITION_FAILURE_MESSAGE,
  SUBJECT_ADDITION_SUCCESS_MESSAGE,
} from "./constants";

import { addSubjectFormValidation, initializeSubject } from "./helper.js";
import { AddSubjectForm } from "./AddSubjectForm.jsx";

export const AddSubjectFormContainer = () => {
  const [subjects, setSubjects] = useSubject();

  const [subject, dispatch] = useReducer(subjectReducer, {}, initializeSubject);

  const handleAddSubjectForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (addSubjectFormValidation(subject)) {
        setSubjects([...subjects, subject]);
        dispatch({ type: ACTIONS.RESET_STATE });
        alert(SUBJECT_ADDITION_SUCCESS_MESSAGE);
      } else {
        alert(SUBJECT_ADDITION_FAILURE_MESSAGE);
      }
    },
    [subjects, subject, setSubjects],
  );

  const handleFormElementChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const payload = event.target.value;
      const id = event.target.id;
      const type = EventIDActionsType.get(id);
      dispatch({ type, payload });
    },
    [dispatch],
  );
  return (
    <AddSubjectForm
      handleAddSubjectForm={handleAddSubjectForm}
      handleFormElementChange={handleFormElementChange}
      subject={subject}
    />
  );
};
