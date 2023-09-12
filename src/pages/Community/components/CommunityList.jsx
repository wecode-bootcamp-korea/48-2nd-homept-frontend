import React from 'react';
import './CommunityList.scss';

const CommunityList = ({ filteredData }) => {
  return (
    <div className="CommunityList">
      {filteredData.map(item => (
        <div className="container" key={item.id}>
          <div className="buttonWrap">
            <button
              className={`button ${
                item.buttonStyle === 'coaching' ? 'coaching' : 'free'
              }`}
            >
              {item.category}
            </button>
            <span className="userName">{item.userName}</span>
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
