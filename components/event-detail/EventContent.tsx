import classes from './EventContent.module.css';

type EventContentProps = {
  children: React.ReactNode
}

const EventContent: React.FC<EventContentProps> = props => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
};

export default EventContent;
