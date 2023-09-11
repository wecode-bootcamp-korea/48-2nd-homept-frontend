import React from 'react';
import './PostDetailBox.scss';

const PostDetailBox = ({ post }) => {
  return (
    <div className="PostDetailBox">
      <div className="userBox">
        <span className="userName">
          {post.grade} {post.userName}
        </span>
        <button className={`button ${post.buttonStyle}`}>
          {post.category}
        </button>
      </div>
      <div className="textbox">
        <div className="title">{post.title}</div>
        <div className="text">{post.content}</div>
        <img className="image" src={post.image} alt="Post Detail" />
        <div className="commentBox">
          <span className="comment">{post.comments}</span>
          <span className="time">{post.time}</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetailBox;
