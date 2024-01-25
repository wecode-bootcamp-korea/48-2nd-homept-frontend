import { API_BASE_URL } from '../../constants/api';

const postSelectedStartDate = selectedStartDate =>
  fetch(`${API_BASE_URL}/custom/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('authorization'),
    },
    body: JSON.stringify({
      startDate: selectedStartDate,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      return;
    })
    .catch(error => {
      console.error(error);
      alert('날짜 설정에 실패했습니다');
    });

export default postSelectedStartDate;
