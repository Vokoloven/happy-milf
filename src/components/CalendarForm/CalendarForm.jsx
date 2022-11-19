import { useState, useEffect } from 'react';
import { productsSearchByName } from 'Redux/ProductSearch/productSearch.service';
import _ from 'lodash';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Notiflix from 'notiflix';
import { Box } from 'Theme/Box';
import {
  Form,
  ProductName,
  Grams,
  WrapperProductName,
  WrapperGrams,
  AddMeal,
} from './CalendarForm.styled';
import { ThemeProvider } from '@mui/material';
import { theme } from 'Theme/MUI/theme';

export const CalendarForm = () => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [productsList, setProductsList] = useState([]);

  const [productInputName, setProductInputName] = React.useState([]);
  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        setId(options[i].id);
        value.push(options[i].value);
      }
    }

    setProductInputName(value);
  };

  const handleGrams = e => {
    setGrams(e.currentTarget.value);
  };

  useEffect(() => {
    if (products) {
      const product = products.filter(({ _id }) => _id === id);
      product && setSelectedProduct(() => product);
    }
  }, [id, products]);

  const addSelectedProduct = () => {
    const result = caloriesCalculator();

    if (productsList?.length === 0) {
      result &&
        setProductsList(prevState => {
          return [...prevState, ...result];
        });
    } else {
      const isDuplicate = productsList.some(({ _id }) => _id === id);

      isDuplicate
        ? Notiflix.Notify.warning(`${productInputName} already in the list`, {
            timeout: 2500,
          })
        : setProductsList(prevState => {
            return [...prevState, ...result];
          });
    }
  };

  const caloriesCalculator = () => {
    if (selectedProduct) {
      const calculatedProductsArray = [];
      const [{ calories }] = selectedProduct;
      const calPerGram = { calories: (grams * calories) / 100, weight: grams };
      const [obj] = selectedProduct;

      if (grams < 100) {
        return;
      }
      const calculatedProducts = { ...obj, ...calPerGram };
      calculatedProductsArray.push(calculatedProducts);

      return calculatedProductsArray;
    }
  };

  const handleCalculationSubmit = e => {
    e.preventDefault();
    console.log(productName, grams);
  };

  useEffect(() => {
    const searchedProducts = async productName => {
      const response = await productsSearchByName({
        params: { search: productName },
      });

      setProducts(response);
    };
    if (reload && productName !== '') {
      searchedProducts(productName);
    }
    if (productName === '') {
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

  return (
    <>
      <Form onSubmit={handleCalculationSubmit}>
        <WrapperProductName>
          <ProductName
            placeholder="Enter product name"
            value={productName}
            onChange={handleProductName}
            type="text"
          />
        </WrapperProductName>
        <WrapperGrams>
          <Grams
            placeholder="Grams"
            value={grams}
            onChange={handleGrams}
            min="100"
            type="number"
          />
        </WrapperGrams>

        <AddMeal type="submit" onClick={addSelectedProduct}>
          +
        </AddMeal>
      </Form>
      <ul>
        {/* Тут нада використовувати 'map' з бекенду (можна винести в окремий компонент) */}
        <li>
          {productsList.map(({ _id, title: { ua }, calories, weight }) => {
            return (
              <Box as="ul" key={_id} display="flex">
                <Box as="li" mr={3}>
                  {ua}
                </Box>
                <Box as="li" mr={3}>
                  {weight} g
                </Box>
                <Box as="li">{calories} kcal</Box>
              </Box>
            );
          })}

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
        {products?.length > 0 && productName && (
          <ThemeProvider theme={theme}>
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
              <InputLabel shrink htmlFor="select-multiple-native">
                Select
              </InputLabel>
              <Select
                multiple
                native
                value={productInputName}
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
          </ThemeProvider>
        )}
      </div>
    </>
  );
};