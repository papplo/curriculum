import { h } from 'preact';
import Styles from './styles.module.scss';

function Button({ children, props }) {
  const getClassName = props?.inline ? `${Styles.button} ${Styles.inline}` : Styles.button;
  return <span className={getClassName}>{children}</span>;
}

export default Button;
