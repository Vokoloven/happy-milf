import { CalendarForm } from '../components/CalendarForm/CalendarForm';
import { CalendarSection } from 'components/CalendarSection';
import { DiaryAside } from '../components/DiaryAside/DiaryAside';
import styled from 'styled-components';

import 'react-calendar/dist/Calendar.css';

const Section = styled.section`
  padding: 147px 20px 0px 20px;
  background-color: transparent;
  height: 920px;
  position: relative;
  @media screen and (min-width: 768px) {
    background-color: white;
    padding: 100px 32px 0px 32px;
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    position: static;
  }
`;

export const CalculatorPage = () => {
  return (
    <Section>
      <CalendarSection />
      <CalendarForm />
      <div></div>
      <DiaryAside />
    </Section>
  );
};
