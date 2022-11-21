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
  cursor: pointer;
`;

const AvatarBox = styled.div`
  border-radius: 10px;
  box-shadow: inset 0px 0px 8px grey;
  z-index: 20;
  position: absolute;
  right: 60px;
  @media screen and (min-width: 530px) {
    right: 170px;
  }
  @media screen and (min-width: 1280px) {
    top: 108px;
    right: 87px;
  }
  // pointer-events: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImg = styled.img`
  pointer-events: none;
  width: 60px;
  height: 60px;
  border-radius: 10px;
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

  return (
    <AvatarBox>
      {avatarSelect === null ? (
        <div>
          <AvatarImg
            style={{ width: '45px', height: '45px' }}
            src="https://cdn2.iconfinder.com/data/icons/users-outline-2/32/user-09-512.png"
            alt="userAvatar"
          />
        </div>
      ) : (
        <AvatarImg src={avatarSelect} alt="userAvatar" />
      )}

      <Input onChange={onChange} id="avatarInput" type="file" />
    </AvatarBox>
  );
};
