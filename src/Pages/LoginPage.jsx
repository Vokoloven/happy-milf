import { LoginPageForm } from 'components/LoginPageForm/LoginPageForm';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;

  padding: 40px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 160px 20px 0px 20px;
  }
`;

export const LoginPage = () => {
  return (
    <Section>
      <LoginPageForm />
    </Section>
  );
};
