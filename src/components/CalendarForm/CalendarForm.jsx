import { useState, useEffect } from 'react';
import { productsSearchByName } from 'service/ProductSearch/productSearch.service';
import { postDayInfo } from 'service/Day/day.service';
import _ from 'lodash';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'Theme/MUI/theme';
import styled from 'styled-components';
import { Loader } from 'components/Loader/Loader';
import { useForm } from 'react-hook-form';
import { authSelector } from 'Redux/Selectors/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { postDaySelector } from 'Redux/Selectors/postDaySelectors';
import { addSummaryData } from 'Redux/PostDay/postDaySlice';
import operations from 'Redux/PostDay/postDay.service';
import moment from 'moment';

import {
  Form,
  ProductName,
  Grams,
  WrapperProductName,
  WrapperGrams,
  GramsTheme,
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
  ProductNameTheme,
  ReturnIconBlack,
  ReturnIconTomato,
} from './CalendarForm.styled';

const SelectStyled = styled(Select)`
  width: 440px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const CalendarForm = ({ setActive, colorTheme }) => {
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
  const { isAddedProductInList, isDeletedProductInList } =
    useSelector(postDaySelector);
  const [startBtnS, setStartBtnS] = useState(false);
  const [isLoadin, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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
    setIsLoading(true);
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
    setIsLoading(false);
  }, [id, products]);

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth > 768) {
      setStartBtnS(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addSelectedProduct = () => {
    if (selectedProduct?.length > 0) {
      const [{ _id }] = selectedProduct;
      setProductId(_id);
      setWeight(Number(grams));
    }

    setGrams('');
    setProductName('');
    setSelectedProduct([]);
    setActive(true);
    if (screenWidth < 768) {
      setStartBtnS(false);
    }
  };

  useEffect(() => {
    if (date && productId && weight) {
      dispatch(
        operations.postDayApiService({
          date,
          productId,
          weight,
        })
      );
      setWeight('');
      setProductId('');
    }
  }, [date, dispatch, productId, weight]);

  useEffect(() => {
    const getDateInfo = async date => {
      const getDataApi = await postDayInfo(date);

      setProductsList(getDataApi);
      dispatch(addSummaryData(getDataApi.id));
    };

    const validationDate = moment(date, 'YYYY-MM-DD', true).isValid();

    if (validationDate && isCompletedRefreshing) {
      getDateInfo(date);
    }
  }, [
    date,
    isCompletedRefreshing,
    isAddedProductInList,
    isDeletedProductInList,
    dispatch,
  ]);

  const deletingProductsFromTheList = e => {
    const dayId = productsList.id;
    const eatenProductId = e.currentTarget.parentNode.id;

    if (dayId && eatenProductId) {
      dispatch(
        operations.postDeleteDayApiService({
          dayId,
          eatenProductId,
        })
      );
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
      {isLoadin && <Loader />}
      {startBtnS && (
        <>
          {screenWidth < 767 && (
            <ReturnButton onClick={handleReturnBtn}>
              {colorTheme ? (
                <ReturnIconTomato alt="<<<" />
              ) : (
                <ReturnIconBlack alt="<<<" />
              )}
            </ReturnButton>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            {colorTheme ? (
              <>
                <WrapperProductName>
                  <ProductNameTheme
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
                  <GramsTheme
                    {...register('grams', {
                      required: 'Enter weight',
                      onChange: handleGrams,
                    })}
                    type="number"
                    placeholder="Grams"
                    value={grams}
                  />
                </WrapperGrams>
              </>
            ) : (
              <>
                <WrapperProductName>
                  <ProductName
                    id="productName"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={handleProductName}
                    type="text"
                  />
                  <div style={{ color: 'red' }}>
                    {errors?.productName && (
                      <p>{errors?.productName.message || 'Error!'}</p>
                    )}
                  </div>
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
              </>
            )}

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
                  <CurrenProductCal>{Math.round(kcal)} kcal</CurrenProductCal>
                  <DelMeal type="button" onClick={deletingProductsFromTheList}>
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
