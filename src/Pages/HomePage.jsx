import { HomePageForm } from 'components/HomePageForm/HomePageForm';
import styled from 'styled-components';

const Section = styled.section`
  @media screen and (max-width: 767px) {
    padding: 32px 20px 100px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 100px 32px 210px 32px;
  }
  padding: 147px 16px 0px 16px;
  margin: auto;
  // height: 594px;
`;

export const HomePage = () => {
  return (
    <Section>
      <HomePageForm />
    </Section>
  );
};
