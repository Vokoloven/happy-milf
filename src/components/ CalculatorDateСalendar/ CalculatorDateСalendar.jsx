import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {
  CalendarContainer,
  CalendarTitle,
} from './ CalculatorDateСalendar.styled';

export const CalculatorDateCalendar = () => {
  // const dateNow = new Date().toLocaleDateString();
  const [value, onValue] = useState(new Date());

  return (
    <CalendarContainer>
      <CalendarTitle>{value.toString()}</CalendarTitle>
      <Calendar value={value} onValue={onValue} />
    </CalendarContainer>
  );
};
