import React, { useState } from 'react';
import { BASE_API_URL } from '../../../config';
import './PostUser.scss';

const PostUser = ({ comments, getPostDetailData }) => {
  const [content, setContent] = useState('');
  const [postUserData, setPostUserData] = useState([]);

  const handleInput = value => {
    setContent(value);
  };

  const handlePostComment = () => {
    const newComment = {
      content,
    };
    // fetch('http://13.124.97.236:3000/community/posts/comments', {
    fetch(`${BASE_API_URL}/community/posts/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('authorization'),
      },
      body: JSON.stringify(newComment),
    })
      .then(response => response.json())
      .then(data => {
        getPostDetailData();
        setContent('');
      });

    setPostUserData([newComment, ...postUserData]);
  };

  return (
    <div className="PostUser">
      <div className="inputWrap">
        <input
          onChange={event => handleInput(event.target.value)}
          className="input"
          type="text"
          value={content}
        />
        <button
          className="button"
          onClick={handlePostComment}
          disabled={content.length === 0}
        >
          댓글게시
        </button>
      </div>

      {postUserData &&
        postUserData.map(item => (
          <div key={item.commentId} className="userBox">
            <div className="userDetail">
              <span className="user">{item.nickname}</span>
              <div className="actions">
                <span className="time">{item.commentTime}</span>
                <button className="delete">삭제</button>
                <button className="edit">수정</button>
              </div>
            </div>
            <div>{item.content}</div>
          </div>
        ))}
    </div>
  );
};

export default PostUser;
