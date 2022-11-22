import { addAvatar } from 'Redux/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { avatarSelector } from 'Redux/Selectors/authSelectors';

import { Input, AvatarBox, AvatarImg } from './Avatar.styled';

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
