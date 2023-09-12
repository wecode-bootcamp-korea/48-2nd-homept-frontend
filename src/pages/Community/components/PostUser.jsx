import React from 'react';
import './PostUser.scss';

const PostUser = () => {
  return (
    <div className="PostUser">
      <div className="inputWrap">
        <input className="input" />
        <button className="button">댓글게시</button>
      </div>
      <div className="userBox">
        <span className="user">user</span>
        <div className="actions">
          <span className="time">시간</span>
          <button className="delete">삭제</button>
          <button className="edit">수정</button>
        </div>
      </div>
      <div>답글입니당</div>
    </div>
  );
};

export default PostUser;
