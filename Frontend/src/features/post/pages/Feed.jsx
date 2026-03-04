import { useEffect } from "react";
import "../styles/feed.scss";
import { usePost } from "../hooks/usePost";
import Post from "./Post";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed?.post) {
    return (
      <main>
        <h1>Feed is loading</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.post.map((postItem) => (
            <Post key={postItem._id} post={postItem} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Feed;
