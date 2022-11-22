import { configAxios } from 'service/config.axios';

export const getUserInfoApi = async () => {
  try {
    const { data } = await configAxios.get('user');

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
