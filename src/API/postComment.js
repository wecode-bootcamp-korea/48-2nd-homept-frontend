const postComment = (comment, chattingData) => {
  fetch(
    // '/data/data.json',
    `http://10.58.52.131:3000/consultant/posts/${chattingData[0].postId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },

      body: JSON.stringify({
        comment,
      }),
    },
  )
    .then(res => {
      if (res.ok) {
        return;
      }
      if (!res.ok) {
        throw new Error('Error');
      }
    })

    .catch(() => {
      alert('댓글 작성에 실패하였습니다');
    });
};

export default postComment;
