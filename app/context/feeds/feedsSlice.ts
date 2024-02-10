import { createSlice } from "@reduxjs/toolkit";

type FeedState = {
  feeds: any;
};

const initialState: FeedState = {
  feeds: null,
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    setFeeds: (state, action) => {
      state.feeds = action.payload;
    },
    setFeedsNull: (state) => {
      state.feeds = null;
    },
  },
});

export const { setFeeds, setFeedsNull } = feedsSlice.actions;
export default feedsSlice.reducer;
