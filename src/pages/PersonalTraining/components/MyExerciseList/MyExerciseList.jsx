import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './MyExerciseList.scss';

const MyExerciseList = ({ myExerciseData }) => {
  return (
    <div className="myExerciseList scroll">
      <div className="myExerciseTitle">
        <div className="text">나의 운동</div>
      </div>
      <div className="myExerciseListContent">
        {myExerciseData.map(myExercise => (
          <CheckBox
            key={myExercise.id}
            name={myExercise.name}
            imageUrl={myExercise.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExerciseList;
