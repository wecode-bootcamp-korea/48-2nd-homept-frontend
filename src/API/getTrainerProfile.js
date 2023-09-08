const getTrainerProfile = () => {
  fetch('/data/trainerProfile.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.data;
    });
};

export default getTrainerProfile;
