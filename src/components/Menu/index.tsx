import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeToggle(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  // useEffect(() => {
  //   console.log(
  //     'useEffect sem dependencias - executa toda vez que o componente renderiza',
  //   );
  // });

  // useEffect(() => {
  //   console.log('useEffect com dependencia vazia - executa uma vez ao montar');
  // }, []);

  useEffect(() => {
    console.log(
      'useEffect com dependencia - executa quando a dependencia muda',
    );
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('cleanup - executa antes do próximo useEffect');
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para home'
        title='Ir para home'
      >
        <HouseIcon size={48} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para histórico'
        title='Ir para histórico'
      >
        <HistoryIcon size={48} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon size={48} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeToggle}
      >
        <SunIcon size={48} />
      </a>
    </nav>
  );
}
