import React from 'react';
import ButtonS from '../../../../components/ButtonS/ButtonS';
import './ProfileContainer.scss';

const ProfileContainer = ({ data }) => {
  return (
    <div className="profileContainer">
      <div className="imgBox">
        <img
          src={data.profileImage}
          className="profileImage"
          alt="profileIMG"
        />
      </div>
      <div className="profileTextWrap">
        <div className="imogeAndNickName">
          <div className="imoge">{data.imoge}</div>
          <div className="nickName">{data.nickName}</div>
        </div>
        <ProfileContent data={data} />
      </div>
      <ButtonS text="무료상담" />
    </div>
  );
};
export default ProfileContainer;

const PROFILE_CONTENT_TITLE = [
  { title: 'LICENSE', keyText: 'license' },
  { title: 'CAREER', keyText: 'career' },
  { title: 'AWARDS', keyText: 'awards' },
];

const ProfileContent = ({ data }) => (
  <>
    {PROFILE_CONTENT_TITLE.map(text => (
      <>
        <div className="titleText">{text.title}</div>
        {data[text.keyText].map(text => (
          <div className="contentText" key={text}>
            {text}
          </div>
        ))}
      </>
    ))}
  </>
);
