import React from 'react';
import './ContentTab.scss';

const ContentTab = ({ selectedTab, handlerTab, tabs }) => {
  return (
    <div className="contentTab">
      {tabs.map(item => (
        <div
          className="tabItem"
          key={item.id}
          onClick={() => handlerTab(item.id)}
        >
          <div
            className={`${selectedTab === item.id ? 'on' : ''} tabItemText `}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentTab;
