import Link from 'next/link';
import classes from './Button.module.css';


type ButtonProps = {
  link: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = props => {
  return <Link href={props.link}>
    <a className={classes.btn}>{props.children}</a>
  </Link>;
};

export default Button;