import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PostNav from './components/PostNav';
import ContentTab from '../../components/ContentTab/ContentTab';
import './Post.scss';

const Post = () => {
  const [searchParams] = useSearchParams();
  const tabId = Number(searchParams.get('tabId'));
  const [selectedTab, setSelectedTab] = useState(tabId);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlerTab = num => setSelectedTab(num);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(`/community/postdetail/:id`);
  };

  // const handleAdd = () => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title,
  //       content,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       navigate(`/community/postdetail/${data.id}`);
  //     });
  // };

  const handlecancel = () => {
    navigate('/community');
  };
  const handleTitle = e => {
    setTitle(e.target.value);
  };
  console.log(title);
  const handleContent = e => {
    setContent(e.target.value);
  };
  console.log(content);

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
        tabs={CONTENT_TAP_DATA}
      />
      <div className="textWrap">
        <span className="user">🥇고구마</span>
        <button className="button">사진추가</button>
      </div>
      <div className="inputWrap">
        <input
          onChange={handleTitle}
          value={title}
          className="input"
          placeholder="제목을 입력해주세요"
        />
        <textarea
          onChange={handleContent}
          value={content}
          className="textarea"
          placeholder="게시글을 입력해주세요"
        />
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
