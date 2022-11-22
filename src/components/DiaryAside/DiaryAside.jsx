import {
  Aside,
  TitleAside,
  List,
  InfoName,
  InfoText,
  RecTitle,
  DietText,
  AsideContainer,
  StyledUl,
} from './DiaryAside.styled';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'Redux/Selectors/userInfoSelector';
import { postDaySelector } from 'Redux/Selectors/postDaySelectors';
import { Box } from 'Theme/Box';

export const DiaryAside = () => {
  const { userInfo } = useSelector(userInfoSelector);
  const { dayId } = useSelector(postDaySelector);

  if (userInfo.length === 0) {
    return;
  }

  const day = userInfo.days.filter(({ _id }) => _id === dayId);

  if (day.length === 0) {
    return;
  }

  const [{ daySummary }] = day;

  const secondNotAllowedProducts = userInfo.userData.notAllowedProducts.slice(
    0,
    6
  );

  return (
    <Aside>
      <AsideContainer>
        <div>
          <TitleAside>Summary for {daySummary.date}</TitleAside>
          <List>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Left</InfoName>
                <InfoText>{daySummary.kcalLeft.toFixed(2)} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Consumed</InfoName>
                <InfoText>{daySummary.kcalConsumed.toFixed(2)} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Daily rate</InfoName>
                <InfoText>{daySummary.dailyRate.toFixed(2)} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>n% of normal</InfoName>
                <InfoText>
                  {daySummary.percentsOfDailyRate.toFixed(2)} kcal
                </InfoText>
              </div>
            </li>
          </List>
        </div>
        <Box display="flex" flexDirection="column">
          <RecTitle>Food not recommended</RecTitle>
          {/* !! */}
          {1 === 0 ? (
            <DietText>Your diet will displayed here</DietText>
          ) : (
            <StyledUl>
              {secondNotAllowedProducts.map(food => (
                <Box as="li" mb={3} key={food}>
                  {food}
                </Box>
              ))}
            </StyledUl>
          )}
          {/* !! */}
        </Box>
      </AsideContainer>
    </Aside>
  );
};
