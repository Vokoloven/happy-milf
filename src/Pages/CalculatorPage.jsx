import { CalendarForm } from '../components/CalendarForm/CalendarForm';
import { CalendarSection } from 'components/CalendarSection';
import { DiaryAside } from '../components/DiaryAside/DiaryAside';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import 'react-calendar/dist/Calendar.css';

const Section = styled.section`
  padding: 70px 20px 0px 20px;
  margin-top: 10px;
  background-color: transparent;
  position: relative;
  @media screen and (min-width: 768px) {
    height: 920px;
    background-color: white;
    padding: 96px 32px 0px 32px;
    margin-top: 4px;
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    padding: 147px 16px 0px 16px;
    position: static;
    height: 707px;
  }
`;

const CalculatorPage = ({ colorTheme }) => {
  const [active, setActive] = useState(true);
  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth > 768) {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section id="calculatorSection">
      <CalendarSection colorTheme={colorTheme} />
      <CalendarForm colorTheme={colorTheme} setActive={setActive} />
      {active && <DiaryAside />}
    </Section>
  );
};

export default CalculatorPage;
