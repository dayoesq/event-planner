import EventItem from './EventItem';
import classes from './EventList.module.css';

export interface IItem {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  date: string | number;
  image: string;
  isFeatured?: boolean;
}

type EventListProps = {
  items: IItem[]
};

const EventList: React.FC<EventListProps> = props => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          id={item.id}
          key={item.id}
          title={item.title}
          date={item.date}
          image={item.image}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
