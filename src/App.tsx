import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Heading } from './components/Heading';

export function App() {
  // const [numero, setNumero] = useState(() => {
  //   // utilizado para inicializar valores pesados apenas uma vez
  //   console.log('Lazy initialization');
  //   return 0;
  // });

  // usado para quando o novo estado depende do estado anterior
  const [numero, setNumero] = useState(0);

  function incrementar() {
    // maneira correta de atualizar o estado baseado no valor anterior do estado
    setNumero(prevState => prevState + 1);
  }

  return (
    // react fragment esse <> </> para nao precisar criar uma div desnecessaria
    <>
      <Heading>Numero: {numero}</Heading>
      <button onClick={incrementar}>Incrementar</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='string'
              placeholder='Digite algo'
              defaultValue={'Valor preenchido'}
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
