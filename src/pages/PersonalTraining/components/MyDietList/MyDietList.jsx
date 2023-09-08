import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './MyDietList.scss';

const MyDietList = ({ myDietData }) => {
  return (
    <div className="myDietList">
      <div className="myDietTitle">
        <div className="text">나의 식단</div>
      </div>
      <div className="myDietListContent">
        {myDietData.map(myDiet => (
          <CheckBox
            key={myDiet.id}
            name={myDiet.name}
            imageUrl={myDiet.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MyDietList;
