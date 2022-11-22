import { LoginPageForm } from 'components/LoginPageForm/LoginPageForm';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    padding: 150px 32px 495px 32px;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 20px 175px 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 10px;
    padding: 150px 16px 244px 16px;
  }
`;

const LoginPage = () => {
  return (
    <Section>
      <LoginPageForm />
    </Section>
  );
};

export default LoginPage;
