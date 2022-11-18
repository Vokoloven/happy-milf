import { useState } from 'react';

export const CalculatorPage = () => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');

  const handleProductName = e => {
    setProductName(e.currentTarget.value);
  };

  const handleGrams = e => {
    setGrams(e.currentTarget.value);
  };

  const handleCalculationSubmit = e => {
    e.preventDefault();
    console.log(productName, grams);
  };

  return (
    <section style={{ paddingTop: '30px' }}>
      <form onSubmit={handleCalculationSubmit}>
        <label>
          Enter product name
          <input value={productName} onChange={handleProductName} type="text" />
        </label>
        <label>
          Grams
          <input value={grams} onChange={handleGrams} min="100" type="number" />
        </label>
        <button>+</button>
      </form>
      <ul>
        <li>product</li>
        <li>product</li>
        <li>product</li>
      </ul>
    </section>
  );
};
