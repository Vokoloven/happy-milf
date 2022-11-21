import { configAxios } from 'service/config.axios';

export const postDay = async params => {
  try {
    const { data } = await configAxios.post('day', params);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
