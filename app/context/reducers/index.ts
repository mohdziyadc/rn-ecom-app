import { combineReducers } from "redux";
import { feedsReducer } from "./feedsReducer";

export const appReducers = combineReducers({
  feeds: feedsReducer,
});
