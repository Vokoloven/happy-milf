import { useSelector } from 'react-redux';
import { selectorDailyRate } from 'Redux/Selectors/dailyRateSelector';
import { selectorNotAllowedProducts } from 'Redux/Selectors/dailyRateSelector';
import {
  Backdrop,
  CloseBtn,
  Modal,
  ModalTitle,
  DailyRateNumber,
  CalText,
  ModalInfo,
  InfoBox,
  InfoItem,
  InfoList,
  ModalBtn,
} from './DailyRateModal.styled';
import closeIcon from './closeIcon.svg';

export const DailyRateModal = ({
  handleBackdropClose,
  handleClickOnCloseBtn,
}) => {
  const dailyRate = useSelector(selectorDailyRate);
  const notAllowedProducts = useSelector(selectorNotAllowedProducts);
  const secondNotAllowedProducts = notAllowedProducts.slice(0, 6);
  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>
        <CloseBtn onClick={handleClickOnCloseBtn}>
          <img style={{ pointerEvents: 'none' }} src={closeIcon} alt="X" />
        </CloseBtn>
        <ModalTitle>
          Your recommended daily calorie intake is
          <DailyRateNumber>
            {dailyRate}
            <CalText>cal</CalText>
          </DailyRateNumber>
        </ModalTitle>
        <InfoBox>
          <ModalInfo>Foods you should not eat</ModalInfo>
          <InfoList>
            {secondNotAllowedProducts.map(item => (
              <InfoItem key={item}>{item}</InfoItem>
            ))}
          </InfoList>
        </InfoBox>
        <ModalBtn to="/registration">Start losing weight</ModalBtn>
      </Modal>
    </Backdrop>
  );
};
