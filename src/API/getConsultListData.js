const getConsultListData = () => {
  fetch(
    // '/data/consultListData.json',
    'http://10.58.52.222:3000/consultant/posts/list',
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
      return data.data;
    });
};

export default getConsultListData;
