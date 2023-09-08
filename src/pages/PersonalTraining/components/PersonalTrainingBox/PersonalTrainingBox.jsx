import React, { useState, useEffect } from 'react';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import './PersonalTrainingBox.scss';
import MyExerciseList from '../MyExerciseList/MyExerciseList';
import MyDietList from '../MyDietList/MyDietList';

const PersonalTrainingBox = ({
  dateState,
  setDateState,
  makeWeekArr,
  setSelectedDate,
  selectedDate,
}) => {
  const [myExerciseData, setMyExerciseData] = useState([]);
  const [myDietData, setMyDietData] = useState([]);

  const getMyExerciseAndDiet = () => {
    fetch('/data/personalTrainingData.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMyExerciseData(data.exercise);
        setMyDietData(data.diet);
      });
  };

  useEffect(() => {
    getMyExerciseAndDiet();
  }, []);
  return (
    <div className="personalTrainingBox">
      <WeekCalendar
        dateState={dateState}
        setDateState={setDateState}
        makeWeekArr={makeWeekArr}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <MyExerciseList myExerciseData={myExerciseData} />
      <MyDietList myDietData={myDietData} />
    </div>
  );
};

export default PersonalTrainingBox;
