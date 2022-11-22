import { HomePageForm } from 'components/HomePageForm/HomePageForm';
import styled from 'styled-components';
import React from 'react';

const Section = styled.section`
  @media screen and (max-width: 767px) {
    padding: 40px 20px 100px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 68px 32px 398px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 140px 16px 111px 16px;
  }

  margin: auto;
  // height: 594px;
`;

const HomePage = ({ theme }) => {
  return (
    <Section>
      <HomePageForm theme={theme} />
    </Section>
  );
};

export default HomePage;
