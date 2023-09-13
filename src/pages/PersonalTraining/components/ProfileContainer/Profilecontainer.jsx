import React from 'react';
import { useNavigate } from 'react-router';
import ButtonS from '../../../../components/ButtonS/ButtonS';
import './ProfileContainer.scss';

const ProfileContainer = ({ data }) => {
  const navigate = useNavigate();

  const onClickFreeCounsel = () => {
    if (localStorage.getItem('authorization')) {
      navigate(
        `/personal-training/counsel/${data.id}/${data.nickName}/${data.emojiName}`,
      );
    } else {
      alert('로그인을 해주세요');
    }
  };

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
        <div className="emojiAndNickName">
          <div className="emoji">
            {data.emojiName == 'trainer' ? '💪' : '🦾'}
          </div>
          <div className="nickName">{data.nickName}</div>
        </div>
        <ProfileContent data={data} />
      </div>
      <ButtonS text="무료상담" onClick={() => onClickFreeCounsel()} />
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
        <div className={`${data[text.keyText] !== null ? 'titleText' : ''}`}>
          {data[text.keyText] !== null ? text.title : ''}
        </div>
        {data[text.keyText]?.map(text => (
          <div className="contentText" key={text}>
            {text}
          </div>
        ))}
      </>
    ))}
  </>
);
