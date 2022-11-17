import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDailyRate } from 'reduxx/DailyRateApi';
import { DailyRateModal } from 'components/DailyRateModal/DailyRateModal';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {
  Form,
  Label,
  Title,
  Input,
  StartBtn,
  // RadioBtnBox,
} from './HomePageForm.styled';

export const HomePageForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
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
    setIsModalOpen(true);
    reset();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
  }, []);
  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };
  const handleClickOnCloseBtn = () => {
    setIsModalOpen(false);
  };
  const handleBackdropClose = e => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };
  const reset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setBloodType('');
    setDesiredWeight('');
  };

  return (
    <>
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
      {isModalOpen && (
        <DailyRateModal
          handleBackdropClose={handleBackdropClose}
          handleClickOnCloseBtn={handleClickOnCloseBtn}
        />
      )}
    </>
  );
};
