import { useLocation, useNavigate } from 'react-router-dom';
import { convertTimeFormat } from 'utils/converTimeFormat';
import { deleteEvents } from 'utils/deleteEvent';
import defaultPhoto from '../../assets/defaultWide.jpg';
import { dateFormatter } from 'utils/dateFormatter';

import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import PageSkeleton from 'components/PageSkeleton';

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

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const linkLocation = useLocation();

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

  return event ? (
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
              {dateFormatter(date)} at {convertTimeFormat(time)}
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
  ) : (
    <PageSkeleton />
  );
};

export default EventCard;
