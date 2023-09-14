import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import FormItem from './components/FormItem/FormItem';
import { INPUT_DATA, BUTTON_DATA } from './inputData.js';
import './MyPageEditing.scss';

const MyPageEditing = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const physicalInfoData = INPUT_DATA.physicalInfo;
  const nickNameInfoData = INPUT_DATA.nickName;

  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevInputValue => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const getUserInfo = () => {
    fetch(
      `${apiUrl}/users/mypage`,
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
        setFormData({
          height: result.myPageData.height,
          weight: result.myPageData.weight,
        });
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const modifyUserInfo = () => {
    fetch(`${apiUrl}/users/mypage/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
      body: JSON.stringify({
        weight: Number(formData.weight),
        height: Number(formData.height),
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        alert('수정이 완료되었습니다.');
        navigate('/mypage');
      })
      .catch(error => {
        console.error('에러 발생:', error);
      });
  };

  if (!userInfo) return;

  return (
    <div className="myPageEditingContainer">
      <div className="userInfoContainer">
        <div className="infoNickName">
          <FormItem
            key={nickNameInfoData.id}
            className={nickNameInfoData.className}
            infoName={nickNameInfoData.infoName}
            type={nickNameInfoData.type}
            isDisabled
            value={userInfo.nickname}
            placeholder={userInfo.nickName}
          />
        </div>

        <div className="formList">
          {physicalInfoData.map(data => {
            return (
              <FormItem
                key={data.id}
                className={data.className}
                infoName={data.infoName}
                type={data.type}
                name={data.key}
                value={formData[data.key]}
                defaultValue={userInfo[data.key]}
                handleInputChange={handleInputChange}
              />
            );
          })}
        </div>
      </div>
      <Button
        className="btnEditing"
        text="수정완료"
        onClickFunction={modifyUserInfo}
      />
    </div>
  );
};

export default MyPageEditing;
