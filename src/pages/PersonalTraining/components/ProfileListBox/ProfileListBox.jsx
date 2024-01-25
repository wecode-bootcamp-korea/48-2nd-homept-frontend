import React from 'react';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import './ProfileListBox.scss';

const ProfileListBox = ({ trainerData }) => {
  return (
    <div className="profileListBox scroll">
      {trainerData?.map(data => (
        <ProfileContainer data={data} key={data.id} />
      ))}
    </div>
  );
};

export default ProfileListBox;
