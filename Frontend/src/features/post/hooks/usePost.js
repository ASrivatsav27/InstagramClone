import { getFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
  try {
    setLoading(true);
    console.log("Fetching feed...");

    const data = await getFeed(); // API call
    console.log("Feed data:", data);

    setFeed(data); 
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
  } finally {
    setLoading(false); // always reset loading
  }
};

  return { loading, feed, post, handleGetFeed };
};