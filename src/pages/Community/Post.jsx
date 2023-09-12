import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.scss';
import PostNav from './components/PostNav';
import ContentTab from '../../components/ContentTab/ContentTab';

const Post = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handlerTab = num => setSelectedTab(num);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/community/postdetail');
  };
  const handlecancel = () => {
    navigate('/community');
  };

  const CONTENT_TAP_DATA = [
    {
      id: 1,
      text: '자유',
    },
    { id: 2, text: '피트니스 코칭' },
  ];
  return (
    <div className="Post">
      <PostNav text="글작성" />
      <ContentTab
        selectedTab={selectedTab}
        handlerTab={handlerTab}
        CONTENT_TAP_DATA={CONTENT_TAP_DATA}
      />
      <div className="textWrap">
        <span className="user">🥇고구마</span>
        <button className="button">사진추가</button>
      </div>
      <div className="inputWrap">
        <input className="input" />
        <textarea className="textarea" />
      </div>
      <div className="buttonWrap">
        <button onClick={handlecancel} className="cancel">
          취소
        </button>
        <button onClick={handleAdd} className="add">
          게시
        </button>
      </div>
    </div>
  );
};

export default Post;
