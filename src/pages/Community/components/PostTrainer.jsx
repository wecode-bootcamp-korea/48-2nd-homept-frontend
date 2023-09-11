import React from 'react';
import './PostTrainer.scss';

const PostTrainer = () => {
  return (
    <div className="PostTrainer">
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
  );
};

export default PostTrainer;
