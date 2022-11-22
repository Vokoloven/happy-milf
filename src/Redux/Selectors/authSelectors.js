export const authSelector = state => state.auth;
//   const TOKEN = useSelector(state => state.auth.accessToken);
// const NAME = useSelector(state => state.auth.user.username);

export const tokenSelector = state => state.auth.accessToken;
// export const nameSelector = state => state.auth.username;
export const avatarSelector = state => state.auth.avatar;
