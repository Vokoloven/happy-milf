import { CalendarForm } from 'components/CalendarForm';
import { CalendarSection } from 'components/CalendarSection';
import { ChoiceAvatar } from 'components/Avatar/Avatar';

import 'react-calendar/dist/Calendar.css';

export const CalculatorPage = () => {
  return (
    <>
      <section style={{ paddingTop: '30px' }}>
        <CalendarSection />
        <CalendarForm />
      </section>
      <></>
      <ChoiceAvatar />
      <></>
    </>
  );
};
