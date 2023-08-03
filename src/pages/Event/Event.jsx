import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoIosArrowRoundBack } from 'react-icons/io';
import { getOneEventById } from 'utils/getOneEventById';

import {
  BackLink,
  BackButtonText,
  EventCardWrap,
  EventTitle,
  EventCard,
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
} from './Event.styled';

import defaultPhoto from '../../assets/defaultWide.jpg';

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const locationlink = useLocation();
  const backLinkHref = locationlink.state?.from ?? '/';

  useEffect(() => {
    (async function () {
      const data = await getOneEventById(eventId);
      setEvent(data.data);
    })();
    return () => {};
  }, [eventId]);

  if (!event) return;

  const {
    title,
    description,
    date,
    time,
    location,
    category,
    picture = defaultPhoto,
    priority,
  } = event;

  return (
    <div>
      <BackLink to={backLinkHref} type="button">
        <IoIosArrowRoundBack size={24} />
        <BackButtonText>Back</BackButtonText>
      </BackLink>

      <EventCardWrap>
        <div>
          <EventTitle>{title}</EventTitle>
          <EventCard>
            <EventCardImg
              src={picture ? picture : defaultPhoto}
              alt={category}
            />
            <DetailsThumb>
              <EventCardText>{description}</EventCardText>
              <EventCardPriorityThumb>
                <CardCategory>{category}</CardCategory>
                <CardPriority $priority={'High'}>{priority}</CardPriority>
                <CardLocation>{location}</CardLocation>
                <CardDate>
                  {date} at {time}
                </CardDate>
              </EventCardPriorityThumb>

              <ButtonsThumb>
                <CardEditLink to={`/`}>Edit</CardEditLink>
                <CardDeleteButton type="button">Delete event</CardDeleteButton>
              </ButtonsThumb>
            </DetailsThumb>
          </EventCard>
        </div>
      </EventCardWrap>
    </div>
  );
};

export default Event;
