import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './components/Button/Button';
import RadioCard from './components/RadioCard/RadioCard';
import { MEMBERSHIP_DATA } from './PaymentData';
import './Payment.scss';

const Payment = () => {
  const [membershipSelected, setMembershipSelected] = useState('silver');

  const silverMembershipData = MEMBERSHIP_DATA[0];
  const goldMembershipData = MEMBERSHIP_DATA[1];

  const payment = () => {
    fetch('api주소', {
      method: 'Post',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        member_grade_id: 1,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === '결제완료') {
          alert('결제완료');
        } else if (result.message === '잔액부족') {
          alert('잔액부족');
        }
      });
  };

  return (
    <div className="paymentWrap">
      <div className="paymentContainer">
        <div className="header">
          <h2>
            가입할 맴버쉽을 <br />
            골라주세요!
          </h2>
        </div>
        <div className="radioList">
          {MEMBERSHIP_DATA.map((membershipData, id) => {
            return (
              <RadioCard
                key={id}
                setMembershipSelected={setMembershipSelected}
                membershipData={membershipData}
                membershipSelected={membershipSelected}
              />
            );
          })}
        </div>

        <div className="getInfoContent">
          <h3>You'll get:</h3>
          <div className="description">
            <img src="/images/StarFilled.svg" alt="별" />
            <span>{silverMembershipData.getInfo}</span>
          </div>

          {membershipSelected === 'gold' && (
            <>
              {goldMembershipData.getInfo.map((info, num) => (
                <div className="description" key={num}>
                  <img src="/images/StarFilled.svg" alt="별" />
                  <span>{info}</span>
                </div>
              ))}
            </>
          )}
        </div>

        <Button
          className="paymentButton"
          onClickFunction={payment}
          text="결제하기"
        />
      </div>
    </div>
  );
};

export default Payment;
