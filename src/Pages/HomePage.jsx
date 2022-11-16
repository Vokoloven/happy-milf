import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDailyRate } from 'reduxx/DailyRateApi';

export const HomePage = () => {
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

  const handleBackdropClose = e => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  console.log(isModalOpen);
  const reset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setBloodType('');
    setDesiredWeight('');
  };
  return (
    <section style={{ paddingTop: '30px' }}>
      <form
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
        onSubmit={handleStartWeightLosing}
      >
        <label>
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
        </label>
        <label>
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
        </label>
        <label>
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
        </label>
        <div>
          <input
            onChange={handleBlood}
            type="radio"
            id="contactChoice1"
            name="bloodType"
            value="1"
          />
          <label htmlFor="contactChoice1">1</label>

          <input
            onChange={handleBlood}
            type="radio"
            id="contactChoice2"
            name="bloodType"
            value="2"
          />
          <label htmlFor="contactChoice2">2</label>

          <input
            onChange={handleBlood}
            type="radio"
            id="contactChoice3"
            name="bloodType"
            value="3"
          />
          <label htmlFor="contactChoice3">3</label>

          <input
            onChange={handleBlood}
            type="radio"
            id="contactChoice4"
            name="bloodType"
            value="4"
          />
          <label htmlFor="contactChoice4">4</label>
        </div>
        <label>
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
        </label>
        <button>Start losing weight</button>
      </form>
      {isModalOpen && (
        <div onClick={handleBackdropClose}>
          <div
            style={{ width: '100px', height: '100px', backgroundColor: 'grey' }}
          ></div>
        </div>
      )}
    </section>
  );
};
