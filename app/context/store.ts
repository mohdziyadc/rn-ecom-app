import { createStore } from "redux";
import { appReducers } from "./reducers";

export const store = createStore(appReducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
