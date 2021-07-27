import { Fragment } from 'react';
import EventList from '../../components/EventList';
import { getAllEvents } from '../../dummy';
import EventSearch from './EventSearch';

export default function Events() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events}/>
    </Fragment>
  );
}
