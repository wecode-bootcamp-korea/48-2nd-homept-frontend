import React from 'react';
import './Community.scss';
import CommunityNav from './components/CommunityNav';
import CommunityList from './components/CommunityList';

const Community = () => {
  return (
    <div>
      <div>
        <CommunityNav />
        <CommunityList />
      </div>
    </div>
  );
};

export default Community;
