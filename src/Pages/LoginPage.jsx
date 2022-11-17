import { LoginPageForm } from 'components/LoginPageForm/LoginPageForm';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 160px;
`;

export const LoginPage = () => {
  return (
    <Section>
      <LoginPageForm />
    </Section>
  );
};
