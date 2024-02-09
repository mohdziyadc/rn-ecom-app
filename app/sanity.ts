import { createClient } from "@sanity/client";
import { fetchQuery } from "./utils/sanityQuery";

const client = createClient({
  projectId: "ck6nwpjj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-09",
});

export async function fetchFeeds() {
  const data = await client.fetch(fetchQuery).then((feeds) => {
    return feeds;
  });
  return data;
}
