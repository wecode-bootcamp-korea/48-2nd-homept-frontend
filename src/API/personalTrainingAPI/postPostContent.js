import { API_BASE_URL } from '../../constants/api';

const postPostContent = async (content, trainerId) => {
  try {
    await fetch(`${API_BASE_URL}/consultant/posts/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },

      body: JSON.stringify({
        content: content,
        trainerId: Number(trainerId),
      }),
    });
  } catch (err) {
    console.error(err);
    alert('데이터 불러오기 실패');
  }
};

export default postPostContent;
