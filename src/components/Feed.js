// import React from "react";

// const Feed = () => {
//   return (
//     <>
      
//       <div className="feed">
        
//       </div>
//     </>
//   );
// };

// export default Feed;


// import React from "react";
// import { FaHeart, FaComment, FaShare } from "react-icons/fa";

// const posts = [
//   {
//     id: 1,
//     name: "Lara Leones",
//     username: "@thewallart",
//     profileImage: "/assets/profile1.png",
//     postImage: "/assets/post1.png",
//     caption:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     likes: "9.8k",
//     comments: "8.6k",
//     shares: "7.2k",
//   },
//   {
//     id: 2,
//     name: "Thomas J.",
//     username: "@thecustomcreater",
//     profileImage: "/assets/profile2.png",
//     postImage: "/assets/post2.png",
//     caption:
//       "Creativity is intelligence having fun. Bringing art to life!",
//     likes: "5.2k",
//     comments: "3.4k",
//     shares: "1.9k",
//   },
// ];

// const Feed = () => {
//   return (
//     <div className="flex justify-center">
//       {/* Feed Container */}
//       <div className="w-[600px] h-[600px] bg-white p-4 rounded-lg shadow-lg overflow-y-auto">
//         {posts.map((post) => (
//           <div key={post.id} className="bg-gray-100 p-4 rounded-lg mb-4">
//             {/* User Info */}
//             <div className="flex items-center space-x-3">
//               <img
//                 src={post.profileImage}
//                 alt={post.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-semibold">{post.name}</p>
//                 <p className="text-gray-500 text-sm">{post.username}</p>
//               </div>
//             </div>

//             {/* Post Caption */}
//             <p className="mt-3 text-gray-700">{post.caption}</p>

//             {/* Post Image */}
//             <img
//               src={post.postImage}
//               alt="Post"
//               className="mt-3 w-full rounded-lg"
//             />

//             {/* Reactions */}
//             <div className="flex justify-between items-center mt-3 text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <FaHeart className="text-red-500" />
//                 <span>{post.likes}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaComment />
//                 <span>{post.comments}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaShare />
//                 <span>{post.shares}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Feed;













import React from "react";

const posts = [
  {
    id: 1,
    user: "Lara Leones",
    username: "@thewallart",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/assets/profile1.png",
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
    image: "/assets/post1.png",
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
            <img src="/assets/post1.png" alt="user" className="avatar" />
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
