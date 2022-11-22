import { useState, useEffect } from 'react';
import { productsSearchByName } from 'service/ProductSearch/productSearch.service';
import { postDay, deletePostDay, postDayInfo } from 'service/Day/day.service';
import _ from 'lodash';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Notiflix from 'notiflix';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'Theme/MUI/theme';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import menuArrow from '../DailyRateModal/img/MenuArrow.svg';
import { authSelector } from 'Redux/Selectors/authSelectors';
import { useSelector } from 'react-redux';
import moment from 'moment';

import {
  Form,
  ProductName,
  Grams,
  WrapperProductName,
  WrapperGrams,
  AddMeal,
  AddMeals,
  DelMeal,
  ProductsList,
  CurrenProduct,
  CurrenProductName,
  CurrenProductWeight,
  CurrenProductCal,
  ProductsBox,
  StartBtn,
  ReturnButton,
  ProductBox,
} from './CalendarForm.styled';

const SelectStyled = styled(Select)`
  width: 440px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const CalendarForm = ({ setActive }) => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [productsList, setProductsList] = useState('');
  const [productId, setProductId] = useState('');
  const [weight, setWeight] = useState('');
  const { isCompletedRefreshing } = useSelector(authSelector);

  const { date } = useSelector(authSelector);
  const [startBtnS, setStartBtnS] = useState(false);

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

  const handleStartChooseProduct = () => {
    setActive(false);
    setStartBtnS(true);
  };

  const handleGrams = e => {
    setGrams(Number(e.currentTarget.value));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const callApi = () => {
    setReload(true);
  };

  const [debounceCallApi] = useState(() => _.debounce(callApi, 1000));

  const handleProductName = e => {
    debounceCallApi(setProductName(e.currentTarget.value));
    setReload(false);
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

  useEffect(() => {
    if (products) {
      const product = products.filter(({ _id }) => _id === id);
      product && setSelectedProduct(() => product);
    }
  }, [id, products]);

  const screenWidth = window.screen.width;

  const addSelectedProduct = () => {
    if (selectedProduct?.length > 0) {
      const [{ _id }] = selectedProduct;
      setProductId(_id);
      setWeight(Number(grams));
    }

    // const result = caloriesCalculator();

    // const [{ weight }] = result;

    // if (productsList?.length === 0) {
    //   result &&
    //     setProductsList(prevState => {
    //       return [...prevState, ...result];
    //     });
    // } else {
    //   const isDuplicate = productsList.some(({ _id }) => _id === id);

    //   isDuplicate
    //     ? Notiflix.Notify.warning(`${productInputName} already in the list`, {
    //         timeout: 2500,
    //       })
    //     : setProductsList(prevState => {
    //         return [...prevState, ...result];
    //       });
    // }
    setGrams('');
    setProductName('');
    setActive(true);
    if (screenWidth < 768) {
      setStartBtnS(false);
    }
  };

  useEffect(() => {
    if (date && productId && weight) {
      postDay({
        date,
        productId,
        weight,
      });
    }
  }, [date, productId, weight]);

  useEffect(() => {
    const getDateInfo = async date => {
      const getDataApi = await postDayInfo(date);
      setProductsList(getDataApi);
    };

    const validationDate = moment(date, 'YYYY-MM-DD', true).isValid();

    if (validationDate && isCompletedRefreshing) {
      getDateInfo(date);
    }
  }, [date, isCompletedRefreshing]);

  console.log(productsList);

  // const caloriesCalculator = () => {
  //   if (selectedProduct?.length > 0) {
  //     const calculatedProductsArray = [];
  //     const [{ calories }] = selectedProduct;
  //     const calPerGram = { calories: (grams * calories) / 100, weight: grams };
  //     const [obj] = selectedProduct;

  //     if (grams < 100) {
  //       return;
  //     }
  //     const calculatedProducts = { ...obj, ...calPerGram };
  //     calculatedProductsArray.push(calculatedProducts);

  //     return calculatedProductsArray;
  //   }
  // };

  const filteringProductsList = e => {
    const idByClickOnButton = e.currentTarget.parentNode.id;

    if (productsList?.length > 0) {
      const data = productsList.filter(({ _id }) => _id !== idByClickOnButton);
      setProductsList(data);
    }
  };

  const onSubmit = () => {};

  const handleReturnBtn = () => {
    setStartBtnS(false);
    setActive(true);
  };

  useEffect(() => {
    if (screenWidth > 768) {
      setStartBtnS(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {startBtnS && (
        <>
          {screenWidth < 767 && (
            <ReturnButton onClick={handleReturnBtn}>
              <img style={{ pointerEvents: 'none' }} src={menuArrow} alt="X" />
            </ReturnButton>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <WrapperProductName>
              <ProductName
                {...register('productName', {
                  required: 'Product name cant be empty',
                  maxLength: {
                    value: 30,
                    message: 'Product name to large',
                  },
                  pattern: {
                    value: /^[а-яА-ЯёЁ0-9\s]+$/,
                    message: 'Wrong input. Must be Ru or Ua',
                  },
                  onChange: handleProductName,
                })}
                type="text"
                placeholder="Enter product name"
                value={productName}
              />
              <div style={{ color: 'red' }}>
                {errors?.productName && (
                  <p>{errors?.productName.message || 'Error!'}</p>
                )}
              </div>
            </WrapperProductName>
            <WrapperGrams>
              <Grams
                {...register('grams', {
                  required: 'Enter weight',
                  onChange: handleGrams,
                })}
                type="number"
                placeholder="Grams"
                value={grams}
              />
              <div style={{ color: 'red' }}>
                {errors?.grams && <p>{errors?.grams.message || 'Error!'}</p>}
              </div>
            </WrapperGrams>
            <AddMeal type="submit" onClick={addSelectedProduct}>
              +
            </AddMeal>
            {screenWidth > 768 ? (
              <></>
            ) : (
              <AddMeals type="submit" onClick={addSelectedProduct}>
                Add
              </AddMeals>
            )}
          </Form>
        </>
      )}

      <ProductBox>
        {productsList?.eatenProducts &&
          productsList.eatenProducts.map(({ id, kcal, title, weight }) => {
            return (
              <ProductsList key={id}>
                <CurrenProduct id={id}>
                  <CurrenProductName mr={3}>{title}</CurrenProductName>
                  <CurrenProductWeight mr={3}>{weight} g</CurrenProductWeight>
                  <CurrenProductCal>{kcal} kcal</CurrenProductCal>
                  <DelMeal type="button" onClick={filteringProductsList}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L13 13" stroke="#9B9FAA" strokeWidth="2" />
                      <path
                        d="M1 13L13 0.999999"
                        stroke="#9B9FAA"
                        strokeWidth="2"
                      />
                    </svg>
                  </DelMeal>
                </CurrenProduct>
              </ProductsList>
            );
          })}
      </ProductBox>
      <StartBtn type="submit" onClick={handleStartChooseProduct}>
        +
      </StartBtn>
      <ProductsBox>
        {products?.length > 0 && productName && (
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              maxWidth: 300,
            }}
          >
            <ThemeProvider theme={theme}>
              <InputLabel shrink htmlFor="select-multiple-native">
                Select
              </InputLabel>
              <SelectStyled
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
              </SelectStyled>
            </ThemeProvider>
          </FormControl>
        )}
      </ProductsBox>
    </>
  );
};
