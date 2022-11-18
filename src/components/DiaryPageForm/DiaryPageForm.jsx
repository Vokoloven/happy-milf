import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDailyRate } from '../../Redux/DailyRate/DailyRate.service';

import { DiaryAside } from './DiaryAside/DiaryAside';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {
  Form,
  Label,
  Title,
  Input,
  StartBtn,
  Section,
} from './DiaryPageForm.styled';
// import {
//   selectorDailyRate,
//   selectorNotAllowedProducts,
// } from 'Redux/Selectors/dailyRateSelector';
// import {
//   addUserData,
//   addDailyRate,
//   addNotAllowedProducts,
// } from 'Redux/Auth/authSlice';

export const DiaryPageForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');

  const dispatch = useDispatch();
  // const dailyRate = useSelector(selectorDailyRate);
  // const notAllowedProducts = useSelector(selectorNotAllowedProducts);
  // const isFirstRefresh = useRef(true);

  const handleHeight = e => {
    setHeight(e.currentTarget.value);
  };
  const handleWeight = e => {
    setWeight(e.currentTarget.value);
  };
  const handleAge = e => {
    setAge(e.currentTarget.value);
  };
  const handleCurrWeight = e => {
    setDesiredWeight(e.currentTarget.value);
  };
  const handleBlood = e => {
    setBloodType(e.target.value);
  };
  const handleStartWeightLosing = e => {
    e.preventDefault();
    const user = {
      weight: Number(weight),
      height: Number(height),
      age: Number(age),
      desiredWeight: Number(desiredWeight),
      bloodType: Number(bloodType),
    };

    dispatch(getDailyRate(user));

    reset();
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setBloodType('');
    setDesiredWeight('');
  };

  return (
    <Section>
      <div>
        <Title>Calculate your daily calorie intake right now</Title>
        <Form onSubmit={handleStartWeightLosing}>
          <Label>
            <span>Height</span>
            <Input
              min="100"
              max="250"
              type="number"
              name="height"
              required
              value={height}
              onChange={handleHeight}
            />
          </Label>
          <Label>
            <span>Desired weight *</span>
            <Input
              min="20"
              max="500"
              type="number"
              name="weight"
              required
              value={weight}
              onChange={handleWeight}
            />
          </Label>
          <Label>
            <span>Age *</span>
            <Input
              min="18"
              max="100"
              type="number"
              name="age"
              required
              value={age}
              onChange={handleAge}
            />
          </Label>
          <Label>
            Blood type *
            <Input
              min="1"
              max="4"
              type="number"
              name="inputBloodNumber"
              required
              value={Number(bloodType) || ''}
              readOnly
              style={{ pointerEvents: 'none' }}
            />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              style={{ display: 'block' }}
            >
              <FormControlLabel
                onChange={handleBlood}
                value="1"
                control={<Radio />}
                label="1"
              />
              <FormControlLabel
                onChange={handleBlood}
                value="2"
                control={<Radio />}
                label="2"
              />
              <FormControlLabel
                onChange={handleBlood}
                value="3"
                control={<Radio />}
                label="3"
              />
              <FormControlLabel
                onChange={handleBlood}
                value="4"
                control={<Radio />}
                label="4"
              />
            </RadioGroup>
          </Label>

          <Label>
            <span>Current weight *</span>
            <Input
              min="20"
              max="500"
              type="number"
              name="desiredWeight"
              required
              value={desiredWeight}
              onChange={handleCurrWeight}
            />
          </Label>
          <StartBtn>Start losing weight</StartBtn>
        </Form>
      </div>
      <DiaryAside />
    </Section>
  );
};
