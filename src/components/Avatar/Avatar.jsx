import { useState } from 'react';

export const ChoiceAvatar = () => {
  const [userAvatar, setUserAvatar] = useState('');

  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setUserAvatar(event.target.result);
    };
    reader.readAsDataURL(file);
  }
  console.log(userAvatar);

  return (
    <>
      <img src={userAvatar} alt="userAvatar" />
      <input onChange={onChange} id="avatarInput" type="file" />
    </>
  );
};
