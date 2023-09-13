const getChattingData = (setChattingData, trainerId) => {
  fetch(
    '/data/chattingPage.json',
    // `http://10.58.52.131:3000/consultant/posts/${trainerId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
    },
  )
    .then(res => res.json())
    .then(data => {
      setChattingData(data.data);
    });
};

export default getChattingData;
