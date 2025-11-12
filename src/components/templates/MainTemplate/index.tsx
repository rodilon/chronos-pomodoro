import './styles/theme.css';
import './styles/global.css';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { Menu } from '../../Menu';
import { Footer } from '../../Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    // react fragment esse <> </> para nao precisar criar uma div desnecessaria
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
