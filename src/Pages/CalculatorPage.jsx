import { CalendarForm } from 'components/CalendarForm';
import { CalendarSection } from 'components/CalendarSection';
import { DiaryAside } from '../components/DiaryAside/DiaryAside';
import { ChoiceAvatar } from 'components/Avatar/Avatar';

import 'react-calendar/dist/Calendar.css';

export const CalculatorPage = () => {
  return (
    <section style={{ paddingTop: '147px' }}>
      <CalendarSection />
      <CalendarForm />
      <DiaryAside />
    </section>
  );
};
