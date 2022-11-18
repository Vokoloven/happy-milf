import { RegistrationPageForm } from 'components/RegistrationPageForm/RegistrationPageForm';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;

  padding: 40px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 160px 32px 0px 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 160px 16px 0px 16px;
  }
`;

export const RegistrationPage = () => {
  return (
    <Section>
      <RegistrationPageForm />
    </Section>
  );
};
