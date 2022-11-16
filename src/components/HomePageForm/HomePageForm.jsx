import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDailyRate } from 'reduxx/DailyRateApi';
import { DailyRateModal } from 'components/DailyRateModal/DailyRateModal';
import { Form, Label, Title } from './HomePageForm.styled';

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
          <input
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
          <input
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
          <input
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
          <div style={{ display: 'flex' }}>
            <input
              onChange={handleBlood}
              type="radio"
              id="contactChoice1"
              name="bloodType"
              value="1"
            />
            <Label htmlFor="contactChoice1">1</Label>
            <input
              onChange={handleBlood}
              type="radio"
              id="contactChoice2"
              name="bloodType"
              value="2"
            />
            <Label htmlFor="contactChoice2">2</Label>
            <input
              onChange={handleBlood}
              type="radio"
              id="contactChoice3"
              name="bloodType"
              value="3"
            />
            <Label htmlFor="contactChoice3">3</Label>
            <input
              onChange={handleBlood}
              type="radio"
              id="contactChoice4"
              name="bloodType"
              value="4"
            />
            <Label htmlFor="contactChoice4">4</Label>
          </div>
        </Label>

        <Label>
          <span>Current weight *</span>
          <input
            min="20"
            max="500"
            type="number"
            name="desiredWeight"
            required
            value={desiredWeight}
            onChange={handleCurrWeight}
          />
        </Label>
        <button>Start losing weight</button>
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
