const postComment = async (comment, chattingData) => {
  try {
    await fetch(
      `http://10.58.52.224:3000/consultant/posts?postId=${chattingData[0].threadId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
        body: JSON.stringify({
          content: comment,
        }),
      },
    );
  } catch (err) {
    console.error(err);
    alert('데이터 불러오기 실패');
  }
};

export default postComment;
