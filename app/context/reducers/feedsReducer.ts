export const feedsReducer = (state: any = null, action: FeedsAction) => {
  switch (action.type) {
    case "SET_FEEDS": {
      return {
        ...state,
        feeds: action.feeds,
      };
    }
    case "SET_FEEDS_NULL": {
      return {
        ...state,
        feeds: null,
      };
    }

    default: {
      return state;
    }
  }
};
