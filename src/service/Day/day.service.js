import { configAxios } from 'service/config.axios';

export const postDay = async params => {
  try {
    const { data } = await configAxios.post('day', params);

    console.log(data);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
