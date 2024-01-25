import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'moment/locale/ko';
import moment from 'moment';
import postSelectedStartDate from '../../../../API/personalTrainingAPI/postSelectedStartDate';
import './SelectStartDate.scss';

const SelectStartDate = ({ setPtStartDate, ptStartDate, selectedButton }) => {
  const [isDateSet, setIsDateSet] = useState(false);

  const selectedStartDate =
    ptStartDate && moment(ptStartDate).format('YYYY-MM-DD');

  const formatDate = date => {
    <>
      {moment(date).format('MM월 DD일')} (
      {moment(date).format('dddd').slice(0, 1)})
    </>;
  };

  const hanledClick = selectedStartDate => {
    const fetchData = async () => {
      await postSelectedStartDate(selectedStartDate);
      alert('날짜 설정이 완료되었습니다');
      setIsDateSet(true);
    };
    fetchData();
  };

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
      {ptStartDate && (
        <button
          disabled={selectedButton}
          className="seletedDateBox"
          onClick={() => hanledClick(selectedStartDate)}
        >
          {formatDate(ptStartDate)}
          선택
        </button>
      )}
    </div>
  );
};

export default SelectStartDate;
