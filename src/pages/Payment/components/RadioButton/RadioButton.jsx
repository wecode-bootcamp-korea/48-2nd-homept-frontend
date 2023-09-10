import React from 'react';
import './RadioButton.scss';

export default function RadioButton({
  name,
  membershipName,
  setMembershipSelected,
}) {
  const getMembershipValue = e => {
    setMembershipSelected(e.target.id);
  };

  return (
    <div class="radio-buttons-1">
      <label for={membershipName} class="radio-button">
        <input
          type="radio"
          id={membershipName}
          name="membership"
          onClick={getMembershipValue}
          defaultChecked={membershipName === 'silver'}
        />
        <span class="custom-radio" />
      </label>
    </div>
  );
}
