import React, { useState, useEffect } from 'react';
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
  const [communityData, setCommunityData] = useState([]);

  const handlerTab = num => setSelectedTab(num);

  const navigate = useNavigate();

  // const handleAdd = () => {
  //   navigate(`/community`);
  // };
  useEffect(() => {
    const fetchData = () => {
      fetch('/data/communityData.json')
        .then(response => response.json())
        .then(data => setCommunityData(data))
        .catch(error =>
          console.error('데이터를 불러오는 데 실패했습니다.', error),
        );
    };

    fetchData();
  }, []);

  const handlePostAdd = () => {
    fetch('http://localhost:3000/community', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setCommunityData(prevData => [data, ...prevData]);
        navigate('/community');
      });
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
