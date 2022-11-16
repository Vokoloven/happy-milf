import { useState } from 'react';

export const HomePage = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [blood, setBlood] = useState('');
  const [currWeight, setCurrWeight] = useState('');

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
    setCurrWeight(e.currentTarget.value);
  };
  const handleBlood = e => {
    setBlood(e.target.value);
  };

  const handleStartWeightLosing = e => {
    e.preventDefault();
    console.log(height, weight, age, blood, currWeight);
    reset();
  };
  const reset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setBlood('');
    setCurrWeight('');
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
            value={currWeight}
            onChange={handleCurrWeight}
          />
        </label>
        <button>Start losing weight</button>
      </form>
    </section>
  );
};
