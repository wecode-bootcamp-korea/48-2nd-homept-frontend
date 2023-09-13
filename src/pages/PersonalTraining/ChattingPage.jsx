import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WriteHeader from './components/WriteHeader/WriteHeader';
import InputWrap from './components/InputWrap/InputWrap';
import MenuModal from './components/MenuModal/MenuModal';
import deleteChattingPost from '../../API/deleteChattingPost';
import postComment from '../../API/postComment';
import './ChattingPage.scss';

const ChattingPage = () => {
  const param = useParams();
  const trainerId = param.id;
  const [comment, setComment] = useState('');
  const [chattingData, setChattingData] = useState([]);
  const [clickedMenu, setClickedMenu] = useState(false);

  const onClickSend = () => {
    postComment(comment, chattingData);
  };

  const handleComment = value => {
    setComment(value);
  };
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      onClickSend();
    }
  };

  const getChattingData = () => {
    fetch(
      // '/data/chattingPage.json',
      `http://10.58.52.222:3000/consultant/posts/${trainerId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('authorization'),
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        setChattingData(data.data);
      });
  };

  useEffect(() => getChattingData(), []);

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
            key={chat.postId}
            emojiName={chat.userEmojiName}
            nickName={chat.userNickName}
            chattingData={chat.content}
            createdAt={chat.createdAt}
          />
        ))}
        {chattingData[0]?.comments.map(comment => (
          <ChatBox
            key={comment.commentId}
            emojiName={comment.emojiName}
            nickName={comment.nickName}
            chattingData={comment.comment}
            createdAt={comment.createdAt}
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
        onClickSend={onClickSend}
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
