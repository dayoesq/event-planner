import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert/ErrorAlert';
import { getFilteredEvents } from '../../dummy';

export default function FilteredEventPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className='center'>Loading</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const yearAsNum = +filteredYear;
  const monthAsNum = +filteredMonth;

  if (isNaN(yearAsNum)
    || isNaN(monthAsNum)
    || yearAsNum > 2030
    || yearAsNum < 2020
    || monthAsNum > 12
    || monthAsNum < 1 
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please check input and try again.</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: yearAsNum,
    month: monthAsNum
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(yearAsNum, monthAsNum - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </Fragment>
  );
}
