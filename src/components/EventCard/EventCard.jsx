import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getOneEventById } from 'utils/getOneEventById';
import { convertTimeFormat } from 'utils/converTimeFormat';
import { deleteEvents } from 'utils/deleteEvent';
import defaultPhoto from '../../assets/defaultWide.jpg';

import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';

import {
  EventCardThumb,
  EventCardImg,
  DetailsThumb,
  EventCardText,
  EventCardPriorityThumb,
  CardCategory,
  CardPriority,
  CardLocation,
  CardDate,
  ButtonsThumb,
  CardEditLink,
  CardDeleteButton,
} from './EventCard.styled';

const EventCard = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const linkLocation = useLocation();

  useEffect(() => {
    (async function () {
      const { data } = await getOneEventById(eventId);
      setEvent(data);
    })();
    return () => {};
  }, [eventId]);

  if (!event) return;
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    picture = defaultPhoto,
    priority,
  } = event;

  const deleteEvent = async id => {
    await deleteEvents(id);
    navigate('/', { replace: true });
  };

  return (
    <PageContentWrapperWithTitle title={title} position={'center'}>
      <EventCardThumb>
        <EventCardImg
          src={picture ? picture : defaultPhoto}
          alt={category.label}
        />
        <DetailsThumb>
          <EventCardText>{description}</EventCardText>
          <EventCardPriorityThumb>
            <CardCategory>{category.label}</CardCategory>
            <CardPriority $priority={priority.value}>
              {priority.label}
            </CardPriority>
            <CardLocation>{location}</CardLocation>
            <CardDate>
              {date} at {convertTimeFormat(time)}
            </CardDate>
          </EventCardPriorityThumb>

          <ButtonsThumb>
            <CardEditLink
              state={{ from: { state: { from: linkLocation } } }}
              to={`/edit/${id}`}
            >
              Edit
            </CardEditLink>
            <CardDeleteButton type="button" onClick={() => deleteEvent(id)}>
              Delete event
            </CardDeleteButton>
          </ButtonsThumb>
        </DetailsThumb>
      </EventCardThumb>
    </PageContentWrapperWithTitle>
  );
};

export default EventCard;
