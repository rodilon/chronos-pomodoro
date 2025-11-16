import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/templates/MainTemplate';

export function Home() {
  // function handleClick() {
  //   setState(prevState => ({
  //     // alterando o componente pai em APP.tsx atraves do filho.
  //     ...prevState, // O mesmo que copy paste do estado anterior.
  //     currentCycle: 5, // Alterando apenas o currentCycle
  //   }));
  // }
  return (
    // react fragment esse <> </> para nao precisar criar uma div desnecessaria
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
