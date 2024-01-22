import React from 'react';
import ProfileContent from '../../../PersonalTraining/components/ProfileContent';
import './ProfileContainer.scss';

const ProfileContainer = ({ data }) => {
  return (
    <div className="profileContainer">
      <div className="imgBox">
        {data.profileImage && (
          <img
            src={data.profileImage}
            className="profileImage"
            alt="profileIMG"
          />
        )}
      </div>
      <div className="profileTextWrap">
        <div className="imogeAndNickName">
          <div className="imoge">{data.imoge}</div>
          <div className="nickName">{data.nickName}</div>
        </div>
        <ProfileContent data={data} />
      </div>
    </div>
  );
};
export default ProfileContainer;
