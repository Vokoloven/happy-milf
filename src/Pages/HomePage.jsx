import { HomePageForm } from 'components/HomePageForm/HomePageForm';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0px 16px 0px 16px;
  width: 1280px;
  margin: auto;
  height: 594px;
`;

export const HomePage = () => {
  return (
    <Section>
      <HomePageForm />
    </Section>
  );
};
