import React from "react";
import "../styles/feed.scss"; // optional: separate styles if you want

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="user">
        <img
          src={
            post.userProfile ||
            "https://images.unsplash.com/photo-1771199918850-b66326cbccf5?q=80&w=687&auto=format&fit=crop"
          }
          alt={post.username || "user"}
        />
        <p>{post.username || "Unknown"}</p>
      </div>
      <div className="img-wrapper">
        <img src={post.imgUrl} alt="post" />
      </div>
      <div className="bottom">
        <p className="caption">{post.caption || ""}</p>
      </div>
    </div>
  );
};

export default Post;
