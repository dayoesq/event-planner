import Image from 'next/image';

import { IItem } from './EventList';

import classes from './EventItem.module.css';
import Button from './ui/Button';
import DateIcon from './icons/date-icon';
import AddressIcon from './icons/address-icon';
import ArrowRightIcon from './icons/arrow-right-icon';


const EventItem: React.FC<IItem> = props => {

  const humanReadableDate = new Date(props.date).toLocaleDateString('en-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = props.location?.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <Image src={'/' + props.image} alt={props.title} width={400} height={300}/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{props.title}</h1>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${props.id}`}>
            <span>Explore Events</span>
            <span className={classes.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;