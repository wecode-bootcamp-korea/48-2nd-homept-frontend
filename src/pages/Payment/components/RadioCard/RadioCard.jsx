import React, { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import './RadioCard.scss';

export default function RadioCard({
  membershipData,
  setMembershipSelected,
  membershipSelected,
}) {
  const { name, membershipName, description, price, date } = membershipData;
  const getSelectedData = e => {
    setMembershipSelected(e.target.id);
  };
  return (
    <label
      className={`${
        membershipSelected === membershipName ? 'selected' : 'nonSelected'
      } radioItem`}
      onClick={getSelectedData}
    >
      <RadioButton
        membershipName={membershipName}
        setMembershipSelected={setMembershipSelected}
      />
      <div className="membershipInfo">
        <div className="titleInfo">
          <span>{name} 맴버쉽</span>
          <span>{description}</span>
        </div>
        <div className="detailInfo">
          <span>{price}원</span>
          <span>{date}</span>
        </div>
      </div>
    </label>
  );
}
