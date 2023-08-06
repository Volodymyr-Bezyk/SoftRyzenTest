import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getEvents } from 'utils/getEvents';
import EventListCardItem from 'components/EventListCardItem';

import { EventList } from './Events.styled';

const Events = () => {
  const [events, setEvents] = useState([]);
  const linkLocation = useLocation();

  useEffect(() => {
    (async function getEventsList() {
      const data = await getEvents();
      setEvents(data);
    })();

    return () => {};
  }, []);

  return (
    <EventList>
      {events.map(card => (
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
