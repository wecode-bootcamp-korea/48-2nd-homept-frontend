import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.scss';
import CommunityNav from './components/CommunityNav';
import CommunityList from './components/CommunityList';
import CommunityButton from './components/CommunityButton';
import ContentTab from '../../components/ContentTab/ContentTab';

const Community = () => {
  const [communityData, setCommunityData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);

  const handlerTab = num => setSelectedTab(num);
  const navigate = useNavigate();

  const handlePost = () => {
    const userLevel = '🥇';

    if (userLevel === '🥇') {
      navigate('/community/post');
    } else if (userLevel === '🥈' || userLevel === '🥉') {
      navigate('/community/post-limited');
    }
  };

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

  useEffect(() => {
    const fetchData = () => {
      fetch('/data/communityData.json')
        .then(response => response.json())
        .then(data => setCommunityData(data));
    };

    fetchData();
  }, []);

  const filteredData = communityData.filter(item => {
    if (selectedTab === 1) {
      return true;
    }
    if (selectedTab === 2) {
      return item.buttonStyle === 'free';
    }
    if (selectedTab === 3) {
      return item.grade === '🥇' && item.buttonStyle === 'coaching';
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
      <CommunityButton onClick={handlePost} />
    </div>
  );
};

export default Community;
