const postCheckDiet = (
  checkedBox,
  formattedDate,
  getMyExerciseAndDiet,
  setTrainingData,
) => {
  fetch(
    // '/data/trainerProfile.json',
    'http://10.58.52.178:3000/custom/checkDiet',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
      body: JSON.stringify({
        id: checkedBox.id,
        checked: Number(checkedBox.checked),
        selectedDate: formattedDate,
      }),
    },
  ).then(res => {
    if (res.ok) {
      const getData = async () => {
        const { result } = await formattedDate;

        setTrainingData({ exercise: result.exercise, diet: result.diet });
      };

      getData();
    }
  });
};

export default postCheckDiet;
