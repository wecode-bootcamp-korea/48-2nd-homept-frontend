const INPUT_DATA = {
  nickName: {
    className: 'nickname',
    infoName: '닉네임',
    type: 'text',
    placeholder: '집피티',
  },
  physicalInfo: [
    {
      id: 1,
      className: 'tall',
      infoName: '키',
      type: 'number',
      placeholder: '160',
    },
    {
      id: 2,
      className: 'weight',
      infoName: '몸무게',
      type: 'number',
      placeholder: '60',
    },
  ],
};

const BUTTON_DATA = {
  doubleCheck: {
    className: 'btnEditing',
    text: '수정하기',
  },

  submit: {
    className: 'btnSubmit',
    text: '수정완료',
  },
};

export { INPUT_DATA, BUTTON_DATA };
