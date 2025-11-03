import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export function App() {
  return (
    // react fragment esse <> </> para nao precisar criar uma div desnecessaria
    <>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
