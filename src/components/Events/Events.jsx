import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import EllipsisText from 'react-ellipsis-text';

import { getEvents } from 'utils/getEvents';
import defaultPhoto from '../../assets/default.jpg';

import {
  EventList,
  EventListItem,
  EventListCard,
  CardThumb,
  PriorityWrapper,
  CardCategory,
  CardPriority,
  CardImg,
  TimeDetails,
  CardDate,
  CardLocation,
  CardInfo,
  CardTitle,
  CardDescription,
  InfoThumb,
  CardLinkWrap,
  CardMoreInfoLink,
} from './Events.styled';

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
      {events.map(
        ({
          id,
          title,
          description,
          date,
          time,
          location,
          category,
          picture = defaultPhoto,
          priority,
        }) => (
          <EventListItem key={id}>
            <EventListCard $state={{ from: linkLocation }}>
              <CardThumb>
                <PriorityWrapper>
                  <CardCategory>{category}</CardCategory>
                  <CardPriority $priority={priority}>{priority}</CardPriority>
                </PriorityWrapper>
                <CardImg
                  src={picture ? picture : defaultPhoto}
                  alt={category}
                />
              </CardThumb>

              <InfoThumb className="infoThumb">
                <TimeDetails>
                  <CardDate>
                    {date} at {time}
                  </CardDate>
                  <CardLocation>{location}</CardLocation>
                </TimeDetails>

                <CardInfo>
                  <CardTitle>{title}</CardTitle>

                  <CardDescription>
                    <EllipsisText text={description} length={100} />
                  </CardDescription>
                  <CardLinkWrap>
                    <CardMoreInfoLink to={`event/${id}`}>
                      More info
                    </CardMoreInfoLink>
                  </CardLinkWrap>
                </CardInfo>
              </InfoThumb>
            </EventListCard>
          </EventListItem>
        )
      )}
    </EventList>
  );
};

export default Events;
