import { configAxios } from 'service/config.axios';

// export const postDay = async params => {
//   try {
//     const { data } = await configAxios.post('day', params);

//     return data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const deletePostDay = async params => {
//   try {
//     const { data } = await configAxios.delete('day', params);

//     return data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

export const postDayInfo = async date => {
  try {
    const { data } = await configAxios.post('day/info', { date });

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
