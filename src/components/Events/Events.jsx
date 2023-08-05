import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import EllipsisText from 'react-ellipsis-text';

import { getEvents } from 'utils/getEvents';
import { convertTimeFormat } from 'utils/converTimeFormat';
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
            <EventListCard>
              <CardThumb>
                <PriorityWrapper>
                  <CardCategory>{category.label}</CardCategory>
                  <CardPriority $priority={priority.value}>
                    {priority.label}
                  </CardPriority>
                </PriorityWrapper>
                <CardImg
                  src={picture ? picture : defaultPhoto}
                  alt={category.label}
                />
              </CardThumb>

              <InfoThumb className="infoThumb">
                <TimeDetails>
                  <CardDate>
                    {date} at {convertTimeFormat(time)}
                  </CardDate>
                  <CardLocation>{location}</CardLocation>
                </TimeDetails>

                <CardInfo>
                  <CardTitle>{title}</CardTitle>

                  <CardDescription>
                    <EllipsisText text={description} length={100} />
                  </CardDescription>
                  <CardLinkWrap>
                    <CardMoreInfoLink
                      state={{ from: linkLocation }}
                      to={`event/${id}`}
                    >
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
