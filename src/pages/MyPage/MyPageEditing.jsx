import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import FormItem from './components/FormItem/FormItem';
import { MYPAGE_INPUT_DATA } from './inputData.js';
import { API_BASE_URL } from '../../constants/api.jsx';
import './MyPageEditing.scss';

const MyPageEditing = () => {
  const navigate = useNavigate();

  const physicalInfoData = MYPAGE_INPUT_DATA.physicalInfo;
  const nickNameInfoData = MYPAGE_INPUT_DATA.nickName;

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
    if (Number(formData.weight) === 0 || Number(formData.height) === 0) {
      alert('먼지보다 가벼우시군요!😱 정확한 키와 몸무게를 입력해주세요!');
      return;
    }
    fetch(`${API_BASE_URL}/users/mypage/update`, {
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
          {physicalInfoData.map(({ id, className, infoName, type, key }) => {
            return (
              <FormItem
                key={id}
                className={className}
                infoName={infoName}
                type={type}
                name={key}
                value={formData[key]}
                defaultValue={userInfo[key]}
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
