import { configAxios } from 'Redux/config.axios';
import Notiflix from 'notiflix';

// export const productsSearchByName = async () => {
//   try {
//     const responce = await configAxios.get('product', {
//       params: { search: 'яйцо' },
//     });

//     console.log(responce);
//   } catch (e) {
//     console.log(e);
//   }
// };
export const productsSearchByName = async params => {
  try {
    const { data } = await configAxios.get('product', params);

    return data;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Notiflix.Notify.failure(`${message}`, {
      timeout: 2500,
    });
    console.log(message);
  }
};
