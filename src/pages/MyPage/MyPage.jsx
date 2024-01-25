import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import Info from './components/Info/Info';
import { MYPAGE_INPUT_DATA } from './inputData.js';
import { API_BASE_URL } from '../../constants/api.jsx';

import './MyPage.scss';

const MyPage = () => {
  const physicalInfoData = MYPAGE_INPUT_DATA.physicalInfo;
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const goToMyPageEditing = () => {
    navigate('/mypage-editing');
  };

  const getUserInfo = () => {
    fetch(
      `${API_BASE_URL}/users/mypage`,
      // '/data/userData.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      },
    )
      .then(res => res.json())
      .then(result => {
        setUserInfo(result.myPageData);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      alert('로그인을 먼저 해주세요!');
      navigate('/sign-in');
      return;
    }
    getUserInfo();
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <div className="myPageContainer">
      <div className="userInfoContainer">
        <div className="infoNickName">
          <span>{userInfo.emoji}</span>
          <span>{userInfo.nickname}</span>
        </div>

        <div className="infoList">
          {physicalInfoData.map(infoItem => (
            <Info key={infoItem.id} infoItem={infoItem} userInfo={userInfo} />
          ))}
        </div>
      </div>
      <Button
        className="btnEditing"
        text="수정하기"
        onClickFunction={goToMyPageEditing}
      />
    </div>
  );
};

export default MyPage;
