import { HomePageForm } from 'components/HomePageForm/HomePageForm';
import styled from 'styled-components';

const Section = styled.section`
  padding: 30px 16px 0px 16px;
  width: 1280px;
  margin: auto;
  background-color: #e0e0e0;
`;

export const HomePage = () => {
  return (
    <Section>
      <HomePageForm />
    </Section>
  );
};
