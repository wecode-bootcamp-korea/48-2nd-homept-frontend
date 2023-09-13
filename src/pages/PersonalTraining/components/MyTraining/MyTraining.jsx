import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import getMyExerciseAndDiet from '../../../../API/getMyExerciseAndDiet';
import postCheckDiet from '../../../../API/postCheckDiet';
import postCheckExercise from '../../../../API/postCheckExercise';
import './MyTraining.scss';

const MyTraining = ({
  trainingData,
  title,
  onClickTrainingBox,
  type,
  formattedDate,
  setTrainingData,
}) => {
  const [checkedBox, setCheckBoxData] = useState({
    type: '',
    id: 0,
    checked: 0,
    formattedDate,
  });

  useEffect(() => {
    if (checkedBox.type === 'diet') {
      postCheckDiet(
        checkedBox,
        formattedDate,
        getMyExerciseAndDiet,
        setTrainingData,
      );
    }

    if (checkedBox.type === 'exercise') {
      postCheckExercise(
        checkedBox,
        formattedDate,
        getMyExerciseAndDiet,
        setTrainingData,
      );
    }
  }, [checkedBox]);

  return (
    <div className="myTrainingList">
      <div className="myTrainingTitle">
        <div className="text">{title}</div>
      </div>

      <div className="myTrainingListContent">
        {trainingData?.map(({ id, name, imageUrl, checkbox }) => (
          <CheckBox
            type={type}
            id={id}
            key={id}
            name={name}
            imageUrl={imageUrl}
            checked={checkbox === 1 ? true : false}
            onClickTrainingBox={() => onClickTrainingBox(id)}
            setCheckBoxData={setCheckBoxData}
            checkedBox={checkedBox}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTraining;
