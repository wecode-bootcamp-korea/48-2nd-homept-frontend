import { API_BASE_URL } from '../../constants/api';

const deleteChattingPost = async id => {
  try {
    const response = await fetch(`${API_BASE_URL}/consultant/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },
    });
    const result = await response.json();
    return { result };
  } catch (err) {
    console.error(err);
    alert('데이터 불러오기 실패');
  }
};

export default deleteChattingPost;
