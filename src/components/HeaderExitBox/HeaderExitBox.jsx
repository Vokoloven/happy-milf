import { ExitBox, NicName, ExitBtn } from './HeaderExitBox.styled';
import PropTypes from 'prop-types';

export const HeaderExitBox = ({ handleLogOut, NAME }) => {
  return (
    <ExitBox>
      <NicName>{NAME}</NicName>
      <ExitBtn onClick={handleLogOut}>Exit</ExitBtn>
    </ExitBox>
  );
};

HeaderExitBox.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  NAME: PropTypes.string.isRequired,
};
