const postTrainerId = trainerId => {
  fetch(
    // '/data/trainerProfile.json',
    `http://10.58.52.89:3000/consultant/posts/${trainerId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
    },
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.data;
    });
};

export default postTrainerId;
