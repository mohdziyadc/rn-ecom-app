interface SetFeeds {
  type: "SET_FEEDS";
  feeds: any;
}

interface SetFeedsNull {
  type: "SET_FEEDS_NULL";
  feeds: null;
}

type FeedsAction = SetFeeds | SetFeedsNull;
