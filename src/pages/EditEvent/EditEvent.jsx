import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEventById } from 'utils/getOneEventById';

import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import Form from 'components/Form';

const EditEvent = () => {
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
      <PageContentWrapperWithTitle title="Edit event"></PageContentWrapperWithTitle>
      <Form page="editEvent" event={event} />
    </>
  );
};
export default EditEvent;
