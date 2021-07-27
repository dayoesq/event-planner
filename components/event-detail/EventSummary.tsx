import classes from './EventSummary.module.css';

const EventSummary: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;