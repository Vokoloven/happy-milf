import { Container } from 'components/Container/Container';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/DiaryDateСalendar';
// import { useSelector } from 'react-redux';

export const DiaryPage = () => {
  // const TOKEN = useSelector(state => state.auth.accessToken);
  // const ID = useSelector(state => state);
  // console.log(TOKEN);
  // console.log(ID);
  return (
    <>
      <Container>
        <DiaryDateСalendar />
      </Container>
    </>
  );
};
