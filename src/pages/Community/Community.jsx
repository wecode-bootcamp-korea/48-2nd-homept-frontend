import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommunityNav from './components/CommunityNav';
import CommunityList from './components/CommunityList';
import CommunityWriteButton from './components/CommunityWriteButton';
import ContentTab from '../../components/ContentTab/ContentTab';
import { BASE_API_URL } from '../../config';
import './Community.scss';

const CONTENT_TAP_DATA = [
  {
    id: 1,
    text: '전체',
  },
  { id: 2, text: '자유' },
  {
    id: 3,
    text: '🎖️ 피트니스 코칭',
  },
];

const Community = () => {
  const [communityData, setCommunityData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);

  const handlerTab = num => setSelectedTab(num);
  const navigate = useNavigate();

  const handlePost = () => {
    const authorization = localStorage.getItem('authorization');

    let mappedTabId = selectedTab;

    if (selectedTab === 1 || selectedTab === 2) {
      mappedTabId = 1;
    } else if (selectedTab === 3) {
      mappedTabId = 2;
    }

    if (!authorization) {
      navigate('/sign-in');
    } else {
      navigate(`/community/post?tabId=${mappedTabId}`);
    }
  };

  useEffect(() => {
    const getCommunityData = () => {
      // fetch('http://13.124.97.236:3000/community/posts/all', {
      fetch(`${BASE_API_URL}/community/posts/all`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      })
        .then(response => response.json())
        .then(data => setCommunityData(data.data));
    };

    getCommunityData();
  }, []);

  const filteredData = communityData.filter(item => {
    if (selectedTab === 1) {
      return true;
    }
    if (selectedTab === 2) {
      return item.category === 1;
    }
    if (selectedTab === 3) {
      return item.category === 2;
    }
    return false;
  });

  return (
    <div>
      <CommunityNav />
      <ContentTab
        selectedTab={selectedTab}
        handlerTab={handlerTab}
        CONTENT_TAP_DATA={CONTENT_TAP_DATA}
      />
      <CommunityList filteredData={filteredData} />
      <CommunityWriteButton onClick={handlePost} />
    </div>
  );
};

export default Community;
