import { addAvatar } from 'Redux/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { avatarSelector } from 'Redux/Selectors/authSelectors';
import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  width: 60px;
  height: 60px;
  padding: 0;
  bottom: 0;
  border-radius: 50%;
  opacity: 0;
`;

const AvatarBox = styled.div`
  position: absolute;
  right: 60px;
`;

export const ChoiceAvatar = () => {
  const dispatch = useDispatch();
  const avatarSelect = useSelector(avatarSelector);

  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      dispatch(addAvatar(event.target.result));
    };
    reader.readAsDataURL(file);
  }
  console.dir(document.querySelector('#avatarInput'));
  return (
    <AvatarBox>
      <img
        style={{ width: '60px', borderRadius: '50%' }}
        src={avatarSelect}
        alt="userAvatar"
      />
      <Input onChange={onChange} id="avatarInput" type="file" />
    </AvatarBox>
  );
};
