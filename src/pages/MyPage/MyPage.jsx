import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import Info from './components/Info/Info';
import { INPUT_DATA, BUTTON_DATA } from './inputData.js';
import './MyPage.scss';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const goToMyPageEditing = useNavigate('/mypage-editing');
  const physicalInfoData = INPUT_DATA.physicalInfo;

  const getUserInfo = () => {
    fetch('/data/userData.json', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json;charset=utf-8',
        // authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserInfo(result.data);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="myPageContainer">
      <div className="userInfoContainer">
        <div className="infoNickName">
          <span>🥇</span>
          <span>NickName</span>
        </div>

        <div className="infoList">
          <Info
            className={physicalInfoData[0].className}
            infoName={physicalInfoData[0].infoName}
            userdata={userInfo.height}
            measure="cm"
          />
          <Info
            className={physicalInfoData[1].className}
            infoName={physicalInfoData[1].infoName}
            userdata={userInfo.weight}
            measure="kg"
          />
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
