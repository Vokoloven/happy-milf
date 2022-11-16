import { useState } from 'react';

export const HomePage = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
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

  const handleStartWeightLosing = e => {
    e.preventDefault();
    console.log(
      height,
      weight,
      age,
      e.target.elements.bloodType.value,
      currWeight
    );
    setHeight('');
    setWeight('');
    setAge('');
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
            type="text"
            name="number"
            required
            value={height}
            onChange={handleHeight}
          />
        </label>
        <label>
          <span>Desired weight *</span>
          <input
            type="text"
            name="number"
            required
            value={weight}
            onChange={handleWeight}
          />
        </label>
        <label>
          <span>Age *</span>
          <input
            type="text"
            name="number"
            required
            value={age}
            onChange={handleAge}
          />
        </label>
        <div>
          <input type="radio" id="contactChoice1" name="bloodType" value="1" />
          <label htmlFor="contactChoice1">1</label>

          <input type="radio" id="contactChoice2" name="bloodType" value="2" />
          <label htmlFor="contactChoice2">2</label>

          <input type="radio" id="contactChoice3" name="bloodType" value="3" />
          <label htmlFor="contactChoice3">3</label>

          <input type="radio" id="contactChoice4" name="bloodType" value="4" />
          <label htmlFor="contactChoice4">4</label>
        </div>
        <label>
          <span>Current weight *</span>
          <input
            type="text"
            name="number"
            required
            value={currWeight}
            onChange={handleCurrWeight}
          />
        </label>
        <button>Start</button>
      </form>
    </section>
  );
};
