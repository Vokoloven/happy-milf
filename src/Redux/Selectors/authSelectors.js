export const authSelector = state => state.auth;

export const tokenSelector = state => state.auth.accessToken;
export const nameSelector = state => state.auth.user.username;
export const avatarSelector = state => state.auth.avatar;
export const themeSelector = state => state.auth.colorTheme;
