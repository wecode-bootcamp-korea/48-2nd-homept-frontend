import React from 'react';
import './CommunityButton.scss';

const CommunityButton = ({ onClick }) => {
  return (
    <div className="CommunityButton">
      <button className="button" onClick={onClick}>
        글쓰기
      </button>
    </div>
  );
};

export default CommunityButton;
