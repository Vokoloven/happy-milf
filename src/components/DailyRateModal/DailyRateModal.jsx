import { Backdrop, Modal } from './DailyRateModal.styled';
import { useSelector } from 'react-redux';
import { selectorDailyRate } from 'reduxx/DailyRate/Selector';
import { selectorNotAllowedProducts } from 'reduxx/DailyRate/Selector';
import { Link } from 'react-router-dom';

export const DailyRateModal = ({ handleBackdropClose }) => {
  const dailyRate = useSelector(selectorDailyRate);
  const notAllowedProducts = useSelector(selectorNotAllowedProducts);
  const secondNotAllowedProducts = notAllowedProducts.slice(0, 6);

  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>
        <h2>
          Your recommended daily calorie intake is
          <span>
            {dailyRate}
            <span>cal</span>
          </span>
        </h2>
        <h3>Foods you should not eat</h3>
        <ul>
          {secondNotAllowedProducts.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Modal>
      <Link>Start losing weight</Link>
    </Backdrop>
  );
};
