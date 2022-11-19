import { useState } from 'react';

export const CalendarForm = () => {
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
    <>
      <form>
        <label>
          Enter product name
          <input value={productName} onChange={handleProductName} type="text" />
        </label>
        <label>
          Grams
          <input value={grams} onChange={handleGrams} min="100" type="number" />
        </label>
        <button onClick={handleCalculationSubmit}>+</button>
      </form>
      <ul>
        {/* Тут нада використовувати 'map' з бекенду (можна винести в окремий компонент) */}
        <li>
          <ul>
            <li>Name</li>
            <li>Weight</li>
            <li>Kcal</li>
          </ul>
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
    </>
  );
};
