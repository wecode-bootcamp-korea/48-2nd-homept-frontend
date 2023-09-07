import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosFitness } from 'react-icons/io';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { CiStar } from 'react-icons/ci';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoSwapVerticalOutline } from 'react-icons/io5';
import './Nav.scss';

import React from 'react';

const Nav = () => {
  const navigate = useNavigate();

  const NAV_ITEMS = [
    {
      url: '/sign-in',
      icon: <IoSwapVerticalOutline className="Icon" />,
      text: (
        <div className="text">
          {localStorage.getItem('TOKEN') ? '로그아웃' : '로그인'}
        </div>
      ),
      onClick: () => {
        if (localStorage.getItem('TOKEN')) {
          localStorage.removeItem('TOKEN');
          alert('로그아웃 되었습니다');
        }
        if (!localStorage.getItem('TOKEN')) {
          navigate('/sign-in');
        }
      },
    },
    {
      url: '/community',
      icon: <HiOutlineChatBubbleBottomCenterText className="Icon" />,
      text: <div className="text">커뮤니티</div>,
      onClick: '',
    },

    {
      url: '/mypage',
      icon: <BsFillPersonFill className="Icon" />,
      text: <div className="text">마이페이지</div>,
      onClick: '',
    },
    {
      url: '/payment',
      icon: <CiStar className="Icon" />,
      text: <div className="text">멤버쉽</div>,
      onClick: '',
    },
    {
      url: '/personal-training',
      icon: <IoIosFitness className="Icon" />,
      text: <div className="text">맞춤운동</div>,
      onClick: '',
    },
  ];

  return (
    <div className="nav">
      {NAV_ITEMS.map(pathName => (
        <NavLink
          key={pathName.text}
          to={pathName.url}
          onClick={pathName.onClick}
          style={({ isActive }) => {
            return {
              color: isActive ? '#FF7A00' : '#b2b2b2',
            };
          }}
        >
          <div className="navItem">
            {pathName.icon}
            {pathName.text}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
