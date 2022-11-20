import { CalendarForm } from '../components/CalendarForm/CalendarForm';
import { CalendarFormMobile } from 'components/CalendarFormMobile';
import { CalendarSection } from 'components/CalendarSection';
import { DiaryAside } from '../components/DiaryAside/DiaryAside';
import styled from 'styled-components';
import { AddMeal } from 'components/CalendarForm/CalendarForm.styled';
import { CalendarSectionMobile } from '../components/CalendarSectionMobile/CalendarSectionMobile';

import 'react-calendar/dist/Calendar.css';

const Section = styled.section`
  padding: 147px 20px 0px 20px;
  background-color: transparent;
  height: 920px;
  position: relative;
  @media screen and (min-width: 768px) {
    background-color: white;
    padding: 96px 32px 0px 32px;
    margin-top: 4px;
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
      <CalendarSectionMobile />
      <AddMeal type="click">+</AddMeal>
      <div style={{ display: 'none' }}>
        <CalendarFormMobile />
      </div>
      <DiaryAside />
    </Section>
  );
};
