/* eslint-disable react/prop-types */
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SUBJECT_FORM_IDS } from "./constants";
import { Subject } from "../../types/interface";

interface AddSubjectFormProps {
  subject: Subject;
  handleAddSubjectForm: (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>,
  ) => void;
  handleFormElementChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export const AddSubjectForm = ({
  subject,
  handleAddSubjectForm,
  handleFormElementChange,
}: AddSubjectFormProps) => {
  const { subjectName, subjectCode, subjectBranch, subjectCredits } = subject;
  return (
    <Form onSubmit={handleAddSubjectForm} className="form-fields">
      <Form.Group
        controlId={SUBJECT_FORM_IDS.SUBJECT_NAME}
        aria-label="Subject Name"
      >
        <Form.Label>Subject Name</Form.Label>
        <Form.Control
          onChange={handleFormElementChange}
          value={subjectName}
          type="text"
          placeholder="Enter Subject Name"
          size="lg"
        />
      </Form.Group>
      <Form.Group controlId={SUBJECT_FORM_IDS.SUBJECT_CODE}>
        <Form.Label>Subject Code</Form.Label>
        <Form.Control
          value={subjectCode}
          onChange={handleFormElementChange}
          required
          type="text"
          placeholder="Enter Subject Code"
        />
      </Form.Group>
      <Form.Group controlId={SUBJECT_FORM_IDS.SUBJECT_BRANCH}>
        <Form.Label>Subject Branch</Form.Label>
        <Form.Control
          value={subjectBranch}
          onChange={handleFormElementChange}
          required
          type="text"
          placeholder="Enter Subject Branch Name"
        />
      </Form.Group>
      <Form.Group controlId={SUBJECT_FORM_IDS.SUBJECT_CREDITS}>
        <Form.Label>Subject Credits</Form.Label>
        <Form.Control
          value={subjectCredits}
          onChange={handleFormElementChange}
          required
          type="Number"
          placeholder="Enter Subject Credits"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
