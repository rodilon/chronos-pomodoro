import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon size={48} />
      </a>
      <a href='#' className={styles.menuLink}>
        <HistoryIcon size={48} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon size={48} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon size={48} />
      </a>
    </nav>
  );
}
