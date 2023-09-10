import React from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './PostNav.scss';

const PostNav = ({ text }) => {
  return (
    <div className="postNav">
      <div className="icon">
        <VscChevronLeft />
      </div>
      <div className="text">{text && <span>{text}</span>}</div>
    </div>
  );
};

export default PostNav;
