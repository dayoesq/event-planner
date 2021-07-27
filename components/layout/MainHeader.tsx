import Link from 'next/link';

import classes from './MainHeader.module.css';

const MainHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Next Event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
