import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOneEventById } from 'utils/getOneEventById';

import BackLink from 'components/BackLink';
import EventCard from 'components/EventCard';

const Event = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await getOneEventById(eventId);
      setEvent(data);
    })();
    return () => {};
  }, [eventId]);

  return (
    <>
      <BackLink />
      {event && <EventCard event={event} />}
    </>
  );
};

export default Event;
