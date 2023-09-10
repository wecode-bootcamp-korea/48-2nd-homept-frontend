import React from 'react';
import './PostDetailBox.scss';

const PostDetailBox = () => {
  return (
    <div className="PostDetailBox">
      <div className="userBox">
        <span className="userName">user</span>
        <button className="button">자유</button>
      </div>
      <div className="textbox">
        <div className="title">제목임</div>
        <div className="text">텍스트입니당</div>
        <img
          className="image"
          src="https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg"
          alt="Post Detail" // alt 속성 추가
        />
        <div className="commentBox">
          <span className="comment">댓글</span>
          <span className="time">작성시간23.09.01</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetailBox;
