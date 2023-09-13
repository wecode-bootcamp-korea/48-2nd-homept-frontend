const postPostContent = (content, trainerId) => {
  fetch(
    // '/data/data.json',
    'http://10.58.52.227:3000/consultant/posts/upload',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('authorization'),
      },

      body: JSON.stringify({
        userId: 1,
        content: content,
        trainerId: Number(trainerId),
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
      alert('게시물 작성에 실패하였습니다');
    });
};

export default postPostContent;
