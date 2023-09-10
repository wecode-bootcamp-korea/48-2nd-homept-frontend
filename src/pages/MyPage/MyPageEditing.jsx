import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import FormItem from './components/FormItem/FormItem';
import Input from './components/Input/Input';
import { INPUT_DATA, BUTTON_DATA } from './inputData.js';
import './MyPageEditing.scss';

const MyPageEditing = () => {
  const goToMyPage = useNavigate('/mypage');
  const physicalInfoData = INPUT_DATA.physicalInfo;
  const nickNameInfoData = INPUT_DATA.nickName;

  return (
    <div className="myPageEditingContainer">
      <div className="userInfoContainer">
        <div className="infoNickName">
          <FormItem
            key={nickNameInfoData.id}
            className={nickNameInfoData.className}
            infoName={nickNameInfoData.infoName}
            type={nickNameInfoData.type}
            placeholder={nickNameInfoData.placeholder}
          />
        </div>

        <div className="formList">
          {physicalInfoData.map(data => (
            <FormItem
              key={data.id}
              className={data.className}
              infoName={data.infoName}
              type={data.type}
              placeholder={data.placeholder}
            />
          ))}
        </div>
      </div>
      <Button
        className="btnEditing"
        text="수정완료"
        onClickFunction={goToMyPage}
      />
    </div>
  );
};

export default MyPageEditing;
