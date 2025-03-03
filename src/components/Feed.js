import React from "react";

const posts = [
  {
    id: 1,
    user: "Lara Leones",
    username: "@thewallart",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/assets/post1.png",
    likeIcon: "/assets/like.png",
    commentIcon: "/assets/comment.png",
    shareIcon: "/assets/share.png",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
  },
  {
    id: 2,
    user: "Thomas J.",
    username: "@thecustomcreater",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/assets/post2.png",
    likeIcon: "/assets/like.png",
    commentIcon: "/assets/comment.png",
    shareIcon: "/assets/share.png",
    likes: "5.4k",
    comments: "3.2k",
    shares: "2.1k",
  },
];

const Feed = () => {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div className="feed" key={post.id}>
          {/* Header */}
          <div className="post-header">
            <img src="/assets/profile1.png" alt="user" className="avatar" />
            <div className="user-info">
              <h4>{post.user}</h4>
              <p>{post.username}</p>
            </div>
            <span className="options">⋮</span>
          </div>

          {/* Post Text */}
          <p className="post-text">{post.text}</p>

          {/* Post Image */}
          <img src={post.image} alt="Post" className="post-image" />

          {/* Likes, Comments, Shares with Icons */}
          <div className="post-actions">
            <span>
              <img src={post.likeIcon} alt="Like" className="action-icon" /> {post.likes}
            </span>
            <span>
              <img src={post.commentIcon} alt="Comment" className="action-icon" /> {post.comments}
            </span>
            <span>
              <img src={post.shareIcon} alt="Share" className="action-icon" /> {post.shares}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
