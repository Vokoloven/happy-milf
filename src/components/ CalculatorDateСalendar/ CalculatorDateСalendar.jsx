import {
  CalendarContainer,
  CalendarTitle,
} from './ CalculatorDateСalendar.styled';

export const CalculatorDateCalendar = () => {
  const dateNow = new Date().toLocaleDateString();
  return (
    <CalendarContainer>
      <CalendarTitle>{dateNow}</CalendarTitle>
      <input type="date" />
    </CalendarContainer>
  );
};
