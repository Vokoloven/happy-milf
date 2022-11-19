import { configAxios } from 'Redux/config.axios';
import Notiflix from 'notiflix';

export const productsSearchByName = async params => {
  try {
    const { data } = await configAxios.get('product', params);

    // console.log(data);

    return data;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Notiflix.Notify.failure(`${message}`, {
      timeout: 2500,
    });
  }
};
