import Head from 'next/head';
import EventList from '../components/EventList';
import { getFeaturedEvents } from '../dummy';
import styles from '../styles/Home.module.css';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Event planner home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <EventList items={featuredEvents}/>
      </div>
    </div>
  );
}
