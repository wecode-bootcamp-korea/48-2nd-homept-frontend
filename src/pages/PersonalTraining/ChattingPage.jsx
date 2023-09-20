import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WriteHeader from './components/WriteHeader/WriteHeader';
import InputWrap from './components/InputWrap/InputWrap';
import MenuModal from './components/MenuModal/MenuModal';
import deleteChattingPost from '../../API/personalTrainingAPI/deleteChattingPost';
import getChattingData from '../../API/personalTrainingAPI/getChattingData';
import postComment from '../../API/personalTrainingAPI/postComment';
import './ChattingPage.scss';

const ChattingPage = () => {
  const param = useParams();
  const trainerId = param.id;
  const [comment, setComment] = useState('');
  const [chattingData, setChattingData] = useState([]);
  const [clickedMenu, setClickedMenu] = useState(false);

  const onClickCommentSend = async () => {
    const getData = async () => {
      await postComment(comment, chattingData);
    };
    await getData();
    getChattingData(trainerId);
  };

  const handleComment = value => {
    setComment(value);
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      onClickCommentSend();
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { result } = await getChattingData(trainerId);
      setChattingData(result.data);
    };
    getData();
  }, []);

  return (
    <div className="conversationContainer">
      {clickedMenu && <div className="modalOverlay" />}
      {chattingData?.[0] && (
        <WriteHeader
          emojiName={chattingData[0].traineEmojiName}
          nickName={chattingData[0].trainerNickname}
          setClickedMenu={setClickedMenu}
        />
      )}
      <div className="counselConversationBox scroll">
        {chattingData?.map(chat => (
          <ChatBox
            key={chat.threadId}
            emojiName={chat.userEmojiName}
            nickName={chat.userNickname}
            chattingData={chat.content}
            createdAt={chat.createdAt}
          />
        ))}
        {chattingData[0]?.comments.map(comment => (
          <ChatBox
            key={comment.commentId}
            emojiName={comment.emojiName}
            nickName={comment.nickname}
            chattingData={comment.content}
            createdAt={comment.commentAt}
            id={comment.commentId}
          />
        ))}
        {clickedMenu && (
          <MenuModal
            deleteChattingPost={deleteChattingPost}
            clickedMenu={clickedMenu}
            setClickedMenu={setClickedMenu}
            chattingData={chattingData}
          />
        )}
      </div>
      <InputWrap
        handleContent={handleComment}
        content={comment}
        onClickSend={onClickCommentSend}
        handleOnKeyPress={handleOnKeyPress}
      />
    </div>
  );
};

export default ChattingPage;

const ChatBox = ({
  emojiName,
  nickName,
  chattingData,
  createdAt,
  className,
}) => {
  return (
    <div className="chatBox">
      <div className="emojiAndNickNameWrap">
        <div className="emojiName">
          {emojiName === 'gold' && '🥇'}
          {emojiName === 'silver' && '🥈'}
          {emojiName === 'bronze' && '🥉'}
          {emojiName === 'trainer' && '💪'}
          {emojiName === 'ironman' && '🦾'}
        </div>
        <div className="nickName">{nickName}</div>
      </div>
      <div className={`${className} contentBox `}>{chattingData}</div>
      <div className="createDate">{formatUTCDateToKoreanTime(createdAt)}</div>
    </div>
  );
};

function formatUTCDateToKoreanTime(utcDateString) {
  const utcDate = new Date(utcDateString);
  const hours = utcDate.getUTCHours();
  const minutes = utcDate.getUTCMinutes();

  const period = hours < 12 ? '오전' : '오후';
  const formattedHours = hours % 12 || 12;

  return `${period} ${formattedHours}:${String(minutes).padStart(2, '0')}`;
}
