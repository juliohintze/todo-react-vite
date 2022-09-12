import classes from './Header.module.scss';
import logo from '../../logo.svg';

export function Header() {
  return (
    <header className={classes['header']}>
      <img src={logo} alt="React logo" />
    </header>
  );
}
