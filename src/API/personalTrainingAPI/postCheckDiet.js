import { BASE_API_URL } from '../../config';

const postCheckDiet = async (checkedBox, formattedDate) => {
  try {
    await fetch(`${BASE_API_URL}/custom/checkDiet`, {
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
    });
  } catch (err) {
    console.error(err);
    alert('데이터 불러오기 실패');
  }
};

export default postCheckDiet;
