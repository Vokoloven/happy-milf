import Avatar from 'react-avatar';
import { useState } from 'react';

export const ChoiceAvatar = () => {
  const [userAvatar, setUserAvatar] = useState('');
  // function onChange(event) {
  //   var file = event.target.files[0];
  //   var reader = new FileReader();
  //   reader.onload = function (event) {
  //     // The file's text will be printed here
  //     console.log(event.target.result);
  //   };

  //   reader.readAsText(file);
  // }

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
      <Avatar
        // onClick={handleAvatarInfo}
        alt="Remy Sharp"
        // src={require(userAvatar)}
      />
    </>
  );
};

// export const ChoiceAvatar = () => {
//   const [avatarImg, setAvatarImg] = useState('');
//   function previewFile() {

//     var file = document.querySelector('input[type=file]').files[0];
//     var reader = new FileReader();

//     reader.onloadend = function () {
//       preview.src = reader.result;
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     } else {
//       preview.src = '';
//     }
//     console.log(reader);
//   }
//   const handleAvatar = () => {};

//   return (
//     <>
//       <input type="file" onChange={handleAvatar} />
//       <img src={require(avatarImg)} alt="Image preview..." />
//       <Avatar
//         onClick={() => {
//           console.log(document.querySelector('img'));
//         }}
//         alt="Remy Sharp"
//         src={require({})}
//       />
//     </>
//   );
// };
