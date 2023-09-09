import React, { useState } from 'react';
import './Community.scss';
import CommunityNav from './components/CommunityNav';
import CommunityList from './components/CommunityList';
import CommunityButton from './components/CommunityButton';
import ContentTab from '../../components/ContentTab/ContentTab';

const Community = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handlerTab = num => setSelectedTab(num);

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

  const COMMUNITY_DATA = [
    {
      id: 1,
      category: '자유',
      userName: '🥈감자1',
      title: '제목',
      content: '형들 보충제 뭐 먹어야해?',
      image:
        'https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg',
      time: '34분전',
      comments: '댓글',
      buttonStyle: 'free',
    },
    {
      id: 2,
      category: '코칭',
      userName: '🥇고구마',
      title: '제목2',
      content: '어떤 프로그램이 좋을까요?',
      image:
        'https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg',
      time: '1시간전',
      comments: '댓글2',
      buttonStyle: 'coaching',
    },
  ];

  const filteredData = COMMUNITY_DATA.filter(item => {
    if (selectedTab === 1) {
      return true;
    }
    if (selectedTab === 2) {
      return item.userName.includes('🥈') && item.buttonStyle === 'free';
    }
    if (selectedTab === 3) {
      return item.userName.includes('🥇') && item.buttonStyle === 'coaching';
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
      <CommunityButton />
    </div>
  );
};

export default Community;
