import { configureStore } from "@reduxjs/toolkit";
import feedsReducer from "./feeds/feedsSlice";

export const store = configureStore({
  reducer: {
    feeds: feedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
