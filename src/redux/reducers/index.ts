import { AnyAction } from "redux";
import { NotificationActions } from "../actions";

const initialState = {};

export const notificationReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case NotificationActions.SHOW_NOTIFICATION:
      return { ...state, ...action.payload };
    case NotificationActions.HIDDEN_NOTIFICATION:
      return initialState;

    default:
      return state;
  }
};
