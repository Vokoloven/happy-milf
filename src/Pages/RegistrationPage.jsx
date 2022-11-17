import { RegistrationPageForm } from 'components/RegistrationPageForm/RegistrationPageForm';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 160px;
`;

export const RegistrationPage = () => {
  return (
    <Section>
      <RegistrationPageForm />
    </Section>
  );
};
