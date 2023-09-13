import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonM from '../../components/ButtonM/ButtonM';
// import getConsultListData from '../../API/getConsultListData';
import './CounselList.scss';

const CounselList = () => {
  const navigate = useNavigate();
  const [consultList, setConsultList] = useState([]);

  const onClickmatchingButton = trainerId =>
    navigate(`/payment/${trainerId}?type=${'gold'}`);

  const getConsultListData = () => {
    fetch(
      // '/data/consultListData.json',
      'http://10.58.52.222:3000/consultant/posts/list/3',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      },
    )
      .then(res => res.json())
      .then(data => setConsultList(data.message));
  };

  useEffect(() => getConsultListData(), []);

  return (
    <div className="counselList">
      {consultList?.map(data => (
        <ChatTrainerBox
          key={data.postId}
          postId={data.postId}
          trainerImage={data.trainerProfileImage}
          trainerNickname={data.trainerNickname}
          emojiName={data.emojiName}
          content={data.content}
          createdDate={data.createdAt}
          onClickmatchingButton={() => onClickmatchingButton(data.trainerId)}
          trainerId={data.trainerId}
        />
      ))}
    </div>
  );
};

export default CounselList;
const ChatTrainerBox = ({
  postId,
  trainerId,
  trainerImage,
  trainerNickname,
  emojiName,
  content,
  onClickmatchingButton,
}) => {
  const navigate = useNavigate();
  const onClickChattingPage = () =>
    navigate(`/personal-training/counsel/chatting/${trainerId}`);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className="chatTrainerBox">
      <div className="trainerImage">
        <img src={`${trainerImage}`} alt="profileImage" />
      </div>
      <div className="rightWrap" onClick={() => onClickChattingPage()}>
        <div className="trainerTextInfo">
          <div className="traineremoji">
            {emojiName == 'trainer' && '💪'}
            {emojiName == 'ironman' && '🦾'}
          </div>
          <div className="trainerNickname">{trainerNickname}</div>
        </div>
        <div className="content">{truncate(content, 32)}</div>
      </div>
      <ButtonM
        firstText="1:1"
        secondText="매칭하기"
        onClick={() => onClickmatchingButton()}
      />
    </div>
  );
};
