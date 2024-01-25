import React from 'react';
import { useNavigate } from 'react-router';
import ProfileContent from '../ProfileContent/ProfileContent';
import ButtonS from '../../../../components/ButtonS/ButtonS';
import './ProfileContainer.scss';
import { API_BASE_URL } from '../../../../constants/api';

const ProfileContainer = ({ data }) => {
  const navigate = useNavigate();

  const fetchConsultStatus = () => {
    if (localStorage.getItem('authorization')) {
      fetch(`${API_BASE_URL}/custom/checkId?trainerId=${data.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      })
        .then(res => res.json())
        .then(Data => {
          if (Data.message === 'TRUE') {
            navigate(`/personal-training/counsel/chatting/${data.id}`);
          }
          if (Data.message === 'FALSE') {
            navigate(
              `/personal-training/counsel/${data.id}/${data.nickName}/${data.emojiName}`,
            );
          }
        });
    } else {
      alert('로그인을 해주세요');
    }
  };
  // }
  // const onClickFreeCounsel = () => {
  //   if (localStorage.getItem('authorization')) {
  //     fetchConsultStatus()
  //     navigate(
  //       `/personal-training/counsel/${data.id}/${data.nickName}/${data.emojiName}`,
  //     );
  //   } else {
  //     alert('로그인을 해주세요');
  //   }
  // };

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
          <div className="emoji">{data.emojiName == 'trainer' ? '💪' : ''}</div>
          <div className="nickName">{data.nickName}</div>
        </div>
        <ProfileContent data={data} />
      </div>
      <ButtonS text="무료상담" onClick={() => fetchConsultStatus()} />
    </div>
  );
};
export default ProfileContainer;
