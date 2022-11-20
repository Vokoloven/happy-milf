import Calendar from 'react-calendar';
import { useState } from 'react';
import { CurrentDate, ChooseDate } from './CalendarSection.styled';

export const CalendarSection = () => {
  const [calendar, setCalendar] = useState(new Date());
  const [toggle, setToggle] = useState(false);

  const year = calendar.toLocaleString('default', { year: 'numeric' });
  const month = calendar.toLocaleString('default', { month: '2-digit' });
  const day = calendar.toLocaleString('default', { day: '2-digit' });

  const formateDate = year + '-' + month + '-' + day;
  console.log(formateDate);
  return (
    <div>
      <CurrentDate onClick={() => setToggle(!toggle)}>
        {formateDate}
      </CurrentDate>
      <ChooseDate onClick={() => setToggle(!toggle)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 9H13V11H15V9Z" fill="#9B9FAA" />
          <path d="M11 9H9V11H11V9Z" fill="#9B9FAA" />
          <path d="M7.00002 9H5V11H7.00002V9Z" fill="#9B9FAA" />
          <path
            d="M17 2.00001H16V0H14V2.00001H6.00001V0H4V2.00001H3.00001C1.89001 2.00001 1.01003 2.90001 1.01003 4.00003L1 18C1 19.1 1.89001 20 3.00001 20H17C18.1 20 19 19.1 19 18V3.99998C19 2.90001 18.1 2.00001 17 2.00001ZM17 18H3.00001V6.99998H17V18Z"
            fill="#9B9FAA"
          />
        </svg>
      </ChooseDate>
      {toggle && <Calendar onChange={setCalendar} value={calendar} />}
    </div>
  );
};
