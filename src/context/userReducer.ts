import { Homework } from "../interface/index";

type ProductActionType =
  | { type: "UPDATE_TASK"; payload: Homework[] }
  | { type: "ADD_TASK"; payload: Homework[] }
  | { type: "GET_TASK"; payload: Homework[] }
  | { type: "GET_TASK_ID"; payload: Homework[] }
  | { type: "GET_EMAIL"; payload: any };

export const HomeworkReducer = (state: any, action: ProductActionType): any => {
  switch (action.type) {
    case "GET_TASK":
      return {
        ...state,
        data: action.payload,
        dataId: [],
      };

    case "ADD_TASK":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    case "GET_TASK_ID":
      return {
        ...state,
        dataId: action.payload,
      };

    case "UPDATE_TASK":
      return {
        ...state,
        data: action.payload,
      };

    case "GET_EMAIL":
      return {
        ...state,
        dataEmail: action.payload,
      };

    default:
      return state;
  }
};
