import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PostNav from './components/PostNav';
import ContentTab from '../../components/ContentTab/ContentTab';
import { BASE_API_URL } from '../../config';
import './Post.scss';

const Post = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [nickname, setNickname] = useState('');
  const [userGrade, setUserGrade] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [communityData, setCommunityData] = useState([]);

  const tabId = Number(searchParams.get('tabId') || 1);

  const handlerTab = id => {
    searchParams.set('tabId', id);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getPostUser = () => {
      fetch(`${BASE_API_URL}/community/posts/all`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      })
        .then(response => response.json())
        .then(data => {
          setNickname(data.nickname);
          setUserGrade(data.memberGrades);
        })
        .catch(error =>
          console.error('데이터를 불러오는 데 실패했습니다.', error),
        );
    };

    getPostUser();
  }, []);

  const handlePostAdd = () => {
    const userId = 1;
    // fetch('http://13.124.97.236:3000/community/posts/upload', {
    fetch(`${BASE_API_URL}/community/posts/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
      body: JSON.stringify({
        userId,
        title,
        content,
        category: tabId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'error') {
          console.error('Error:', data);

          return;
        }
        setCommunityData(prevData => [data.thread, ...prevData]);
        navigate(`/community/postdetail/${data.thread}`);
      })
      .catch(error => console.error('Error:', error));
  };

  const handlePostcancel = () => {
    navigate('/community');
  };
  const handleTitle = value => {
    setTitle(value);
  };

  const handleContent = value => {
    setContent(value);
  };

  return (
    <div className="Post">
      <PostNav text="글작성" />
      <ContentTab
        selectedTab={tabId}
        handlerTab={handlerTab}
        CONTENT_TAP_DATA={CONTENT_TAP_DATA}
      />
      <div className="textWrap">
        <span className="user">
          {userGrade} {nickname}
        </span>
        <button className="button">사진추가</button>
      </div>
      <div className="inputWrap">
        <input
          onChange={event => handleTitle(event.target.value)}
          type="text"
          value={title}
          className="input"
          placeholder="제목을 입력해주세요"
        />
        <textarea
          onChange={event => handleContent(event.target.value)}
          type="text"
          value={content}
          className="textarea"
          placeholder="게시글을 입력해주세요"
        />
      </div>
      <div className="buttonWrap">
        <button onClick={handlePostcancel} className="cancel">
          취소
        </button>
        <button onClick={handlePostAdd} className="add">
          게시
        </button>
      </div>
    </div>
  );
};

export default Post;

const CONTENT_TAP_DATA = [
  {
    id: 1,
    text: '자유',
  },
  { id: 2, text: '피트니스 코칭' },
];
