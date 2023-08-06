import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getEvents } from 'utils/getEvents';
import { sortEvents } from 'utils/sortEvents';
import EventListCardItem from 'components/EventListCardItem';

import { EventList } from './Events.styled';

const Events = ({ category, sortBy }) => {
  const [events, setEvents] = useState([]);
  const linkLocation = useLocation();

  const filteredEvents = events.filter(
    event =>
      event.category.value.toLowerCase() === category.toLowerCase() ||
      category === ''
  );
  const sortedEvents = sortEvents(filteredEvents, sortBy);

  useEffect(() => {
    (async function getEventsList() {
      const data = await getEvents();
      setEvents(data);
    })();

    return () => {};
  }, []);

  return (
    <EventList>
      {sortedEvents.map(card => (
        <EventListCardItem
          key={card.id}
          card={card}
          linkLocation={linkLocation}
        />
      ))}
    </EventList>
  );
};

export default Events;
