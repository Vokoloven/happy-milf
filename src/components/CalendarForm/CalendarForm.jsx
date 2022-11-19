import { useState, useEffect } from 'react';
import { productsSearchByName } from 'Redux/ProductSearch/productSearch.service';
import _ from 'lodash';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const CalendarForm = () => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        console.dir(options[i].id);
        value.push(options[i].value);
      }
    }

    setPersonName(value);
  };

  const handleGrams = e => {
    setGrams(e.currentTarget.value);
  };

  useEffect(() => {
    const searchedProducts = async productName => {
      const resposnse = await productsSearchByName({
        params: { search: productName },
      });
      setProducts(resposnse);
    };
    if (reload && productName !== '') {
      searchedProducts(productName);
    }
    if (productName === '' || products?.length === 0) {
      setProducts([]);
    }
  }, [productName, reload]);

  const callApi = () => {
    setReload(true);
  };

  const [debounceCallApi] = useState(() => _.debounce(callApi, 1000));

  const handleProductName = e => {
    debounceCallApi(setProductName(e.currentTarget.value));
    setReload(false);
  };

  const handleCalculationSubmit = e => {
    e.preventDefault();
    console.log(productName, grams);
  };
  return (
    <>
      <form onSubmit={handleCalculationSubmit}>
        <label>
          Enter product name
          <input value={productName} onChange={handleProductName} type="text" />
        </label>
        <label>
          Grams
          <input value={grams} onChange={handleGrams} min="100" type="number" />
        </label>
        <button type="submit">+</button>
      </form>
      <ul>
        {/* Тут нада використовувати 'map' з бекенду (можна винести в окремий компонент) */}
        <li>
          <ul>
            <li>Name</li>
            <li>Weight</li>
            <li>Kcal</li>
          </ul>
          <button type="button">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L13 13" stroke="#9B9FAA" strokeWidth="2" />
              <path d="M1 13L13 0.999999" stroke="#9B9FAA" strokeWidth="2" />
            </svg>
          </button>
        </li>
      </ul>
      <div>
        {products?.length > 0 && productName && reload && (
          <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
            <InputLabel shrink htmlFor="select-multiple-native">
              Native
            </InputLabel>
            <Select
              multiple
              native
              value={personName}
              // @ts-ignore Typings are not considering `native`
              onChange={handleChangeMultiple}
              label="Native"
              inputProps={{
                id: 'select-multiple-native',
              }}
            >
              {products &&
                products.map(({ _id, title: { ua } }) => (
                  <option key={_id} id={_id} value={ua}>
                    {ua}
                  </option>
                ))}
            </Select>
          </FormControl>
        )}
      </div>
    </>
  );
};
