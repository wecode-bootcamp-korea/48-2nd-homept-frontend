import React from 'react';

function Info({ infoItem, userInfo }) {
  const { className, infoName, key: dataKey, measure } = infoItem;

  return (
    <div className={`info ${className}`}>
      <span>{infoName}</span>
      <div className="infoBox">
        {userInfo[dataKey]} {measure}
      </div>
    </div>
  );
}

export default Info;
