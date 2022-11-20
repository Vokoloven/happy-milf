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
  box-shadow: inset 0px 0px 4px grey;
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

  console.dir(document.querySelector('#avatarInput'));
  return (
    <AvatarBox>
      {avatarSelect === null ? (
        <AvatarImg
          style={{ width: '40px', height: '40px' }}
          src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
          alt="userAvatar"
        />
      ) : (
        <AvatarImg src={avatarSelect} alt="userAvatar" />
      )}

      <Input onChange={onChange} id="avatarInput" type="file" />
    </AvatarBox>
  );
};
