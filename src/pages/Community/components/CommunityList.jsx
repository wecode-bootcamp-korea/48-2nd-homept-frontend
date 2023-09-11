import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityList.scss';

const CommunityList = ({ filteredData }) => {
  const navigate = useNavigate();

  const handlePostDetail = id => {
    navigate(`/community/postdetail/${id}`);
  };

  return (
    <div className="CommunityList">
      {filteredData.map(item => (
        <div
          className="container"
          key={item.id}
          onClick={() => handlePostDetail(item.id)}
        >
          <div className="buttonWrap">
            <button
              className={`button ${
                item.buttonStyle === 'coaching' ? 'coaching' : 'free'
              }`}
            >
              {item.category}
            </button>
            <span className="userName">{`${item.grade} ${item.userName}`}</span>
          </div>
          <div className="titleContainer">
            <div className="titleWrap">
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
            </div>
            <img className="image" src={item.image} alt="이미지" />
          </div>
          <div className="comment">
            <span>{item.time}</span>
            <span>{item.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
