import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "takeru-blog-sample",
  apiKey: process.env.API_KEY,
});
