import Link from 'next/link';
import classes from './Button.module.css';


type ButtonProps = {
  link?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = props => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    );
  }
};

export default Button;