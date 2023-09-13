import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityList.scss';

const CommunityList = ({ filteredData }) => {
  const getMedalEmoji = name => {
    switch (name) {
      case 'gold':
        return '🥇';
      case 'silver':
        return '🥈';
      case 'bronze':
        return '🥉';
      default:
        return '비회원';
    }
  };
  const getCategoryLabel = category => {
    switch (category) {
      case 1:
        return '자유';
      case 2:
        return '코칭';
      default:
        return '기타';
    }
  };
  const navigate = useNavigate();

  const handlePostDetail = (id, category, memberGrades) => {
    const authorization = localStorage.getItem('authorization');

    if (!authorization) {
      navigate('/sign-in');
      return;
    }

    if (memberGrades === 'bronze' && category === 2) {
      navigate('/payment');
      return;
    } else {
      navigate(`/community/postdetail/${id}`);
    }
  };

  return (
    <div className="CommunityList">
      {filteredData.map(item => (
        <div
          className="container"
          key={item.threadId}
          onClick={() =>
            handlePostDetail(item.threadId, item.category, item.memberGrades)
          }
        >
          <div className="buttonWrap">
            <button
              className={`button ${item.category === 2 ? 'coaching' : 'free'}`}
            >
              {getCategoryLabel(item.category)}
            </button>
            <span className="userName">{`${getMedalEmoji(item.memberGrades)} ${
              item.nickname
            }`}</span>
          </div>
          <div className="titleContainer">
            <div className="titleWrap">
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
            </div>
            <img className="image" src={item.imageUrl} alt="이미지" />
          </div>
          <div className="comment">
            <span>{item.time}</span>
            <span>{item.comments}개</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
