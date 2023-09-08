import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import FormItem from './components/FormItem/FormItem';
import Input from './components/Input/Input';
import { INPUT_DATA, BUTTON_DATA } from './inputData.js';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const goToCommunity = () => {
    navigate('/community');
  };
  const goToDoubleCheck = () => {
    alert('중복확인(추후수정예정)');
  };

  const physicalInfoData = INPUT_DATA.physicalInfo;
  const checkBoxData = INPUT_DATA.checkBox;

  return (
    <div className="signUpWrap">
      <div className="signUpContainer">
        <div className="header">
          <h2>추가정보를 입력해주세요!</h2>
        </div>
        <div className="formContent">
          <div className="formItem nickname">
            <span>{INPUT_DATA.nickName.infoName}</span>
            <div className="form">
              <Input
                type={INPUT_DATA.nickName.type}
                placeholder={INPUT_DATA.nickName.placeholder}
              />
              <Button
                className={BUTTON_DATA.doubleCheck.className}
                onClickFunction={goToDoubleCheck}
                text={BUTTON_DATA.doubleCheck.text}
              />
            </div>
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
          <label className="formItem checkBox">
            <input type={checkBoxData.type} />
            <span>{checkBoxData.infoName}</span>
          </label>
        </div>
        <Button
          className={BUTTON_DATA.submit.className}
          onClickFunction={goToCommunity}
          text={BUTTON_DATA.submit.text}
        />
      </div>
    </div>
  );
};

export default SignUp;
