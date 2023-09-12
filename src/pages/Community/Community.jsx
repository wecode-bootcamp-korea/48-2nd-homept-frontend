import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommunityNav from './components/CommunityNav';
import CommunityList from './components/CommunityList';
import CommunityWriteButton from './components/CommunityWriteButton';
import ContentTab from '../../components/ContentTab/ContentTab';
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
    const userLevel = '🥇';

    if (userLevel === '🥇') {
      if (selectedTab === 1) {
        navigate('/community/post?tabId=1');
      } else if (selectedTab === 2) {
        navigate('/community/post?tabId=1');
      } else if (selectedTab === 3) {
        navigate('/community/post?tabId=2');
      }
    } else if (userLevel === '🥈' || userLevel === '🥉') {
      navigate('/community/post-limited');
    }
  };

  useEffect(() => {
    const getCommunityData = () => {
      fetch('/data/communityData.json')
        .then(response => response.json())
        .then(data => setCommunityData(data));
    };

    getCommunityData();
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
        tabs={CONTENT_TAP_DATA}
      />
      <CommunityList filteredData={filteredData} />
      <CommunityWriteButton onClick={handlePost} />
    </div>
  );
};

export default Community;
