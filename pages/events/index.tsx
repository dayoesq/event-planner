import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy';
import EventSearch from '../../components/events/EventSearch';

export default function Events() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (year?: string, month?: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </Fragment>
  );
}
