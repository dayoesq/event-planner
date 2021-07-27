import Button from '../../ui/Button';
import classes from './ResultsTitle.module.css';

const ResultsTitle: React.FC<{ date: Date }> = ({ date }) => {

  const humanReadableDate = new Date(date).toLocaleDateString('en-FI', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
