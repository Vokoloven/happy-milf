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
  CloseModalIcon,
  CloseModalIconBlack,
} from './DailyRateModal.styled';
import closeIcon from './img/closeIcon.svg';

export const DailyRateModal = ({
  handleBackdropClose,
  handleClickOnCloseBtn,
  colorTheme,
}) => {
  const dailyRate = useSelector(selectorDailyRate);
  const notAllowedProducts = useSelector(selectorNotAllowedProducts);
  const secondNotAllowedProducts = notAllowedProducts.slice(0, 6);

  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>
        {!colorTheme ? (
          <CloseModalIconBlack
            onClick={handleClickOnCloseBtn}
            width="20px"
            alt="themeIcon"
          ></CloseModalIconBlack>
        ) : (
          <CloseModalIcon
            onClick={handleClickOnCloseBtn}
            width="20px"
            alt="themeIcon"
          ></CloseModalIcon>
        )}

        <CloseBtn onClick={handleClickOnCloseBtn}>
          <img style={{ pointerEvents: 'none' }} src={closeIcon} alt="X" />
        </CloseBtn>
        <CloseBtn onClick={handleClickOnCloseBtn}>
          <img style={{ pointerEvents: 'none' }} src={closeIcon} alt="X" />
        </CloseBtn>
        <ModalTitle>
          Your recommended daily calorie intake is
          <DailyRateNumber>
            {dailyRate}
            <CalText>kcal</CalText>
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
