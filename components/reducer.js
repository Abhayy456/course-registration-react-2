import { initializeSubject } from "./helper.js";

import { ACTIONS } from "./constants.js";

export const subjectReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SUBJECT_NAME:
      return { ...state, subjectName: action.payload };
    case ACTIONS.CHANGE_SUBJECT_CODE:
      return { ...state, subjectCode: action.payload };
    case ACTIONS.CHANGE_SUBJECT_BRANCH:
      return { ...state, subjectBranch: action.payload };
    case ACTIONS.CHANGE_SUBJECT_CREDITS:
      return { ...state, subjectCredits: +action.payload };
    case ACTIONS.RESET_STATE:
      return initializeSubject();
    default:
      return state;
  }
};
