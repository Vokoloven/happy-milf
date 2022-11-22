import {
  Aside,
  TitleAside,
  List,
  InfoName,
  InfoText,
  RecTitle,
  DietText,
  AsideContainer,
} from './DiaryAside.styled';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'Redux/Selectors/userInfoSelector';
import { postDaySelector } from 'Redux/Selectors/postDaySelectors';

export const DiaryAside = () => {
  const { userInfo } = useSelector(userInfoSelector);
  const { dayId } = useSelector(postDaySelector);

  if (userInfo.length === 0) {
    return;
  }

  const day = userInfo.days.filter(({ _id }) => _id === dayId);

  const [{ daySummary }] = day;

  return (
    <Aside>
      <AsideContainer>
        <div>
          <TitleAside>Summary for {daySummary.date}</TitleAside>
          <List>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Left</InfoName>
                <InfoText>{daySummary.kcalLeft} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Consumed</InfoName>
                <InfoText>{daySummary.kcalConsumed} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>Daily rate</InfoName>
                <InfoText>{daySummary.dailyRate} kcal</InfoText>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <InfoName>n% of normal</InfoName>
                <InfoText>{daySummary.percentsOfDailyRate} kcal</InfoText>
              </div>
            </li>
          </List>
        </div>
        <div>
          <RecTitle>Food not recommended</RecTitle>
          {/* !! */}
          {1 === 0 ? (
            <DietText>Your diet will displayed here</DietText>
          ) : (
            <DietText>replace here Backend diet info</DietText>
          )}
          {/* !! */}
        </div>
      </AsideContainer>
    </Aside>
  );
};
