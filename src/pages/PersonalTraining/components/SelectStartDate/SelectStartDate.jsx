import React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './SelectStartDate.scss';

const SelectStartDate = ({ setPtStartDate, ptStartDate, selectedButton }) => {
  return (
    <div className="selectStartDate">
      <div className="calendarTitle">운동 시작 날짜를 선택해주세요</div>
      <Calendar
        onChange={setPtStartDate}
        value={ptStartDate}
        className="calendar"
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        next2Label={null}
        prev2Label={null}
      />
      <div className="text-gray-500 mt-4">
        {ptStartDate && moment(ptStartDate).format('YYYY년 MM월 DD일')}
      </div>
      <button disabled={selectedButton}>선택하기</button>
    </div>
  );
};

export default SelectStartDate;
