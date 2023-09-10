import React, { useState } from 'react';
import './PostDetail.scss';
import PostNav from './components/PostNav';
import PostDetailBox from './components/PostDetailBox';

const PostDetail = () => {
  const [userLevel, setUserLevel] = useState('🥇');

  return (
    <div className="postDetail">
      <div className="container">
        <PostNav text="" />
        <PostDetailBox />
      </div>

      {userLevel === '🥇' ? (
        <div className="trainerBox">
          <div className="answer">A</div>
          <div className="commentBox">
            <span className="trainer">💪 trainer</span>
            <span className="time">작성시간</span>
          </div>
          <div className="content">
            1. 과도하게 고개를 숙이는 자세를 피하실 것 2. 스마트폰 사용을 당분간
            중단 혹은 자제 3. 경추 멕켄지 신전운동을 꾸준하게 해보십시오.
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default PostDetail;
