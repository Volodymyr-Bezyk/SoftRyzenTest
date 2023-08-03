import { IoIosArrowRoundBack } from 'react-icons/io';
import {
  BackButton,
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
  return (
    <div>
      <BackButton type="button">
        <IoIosArrowRoundBack size={24} />
        <BackButtonText>Back</BackButtonText>
      </BackButton>

      <EventCardWrap>
        <div>
          <EventTitle>Gallery Opening</EventTitle>
          <EventCard>
            <EventCardImg src={defaultPhoto} alt="" />
            <DetailsThumb>
              <EventCardText>
                Discover an enchanting evening celebrating the world of art at
                our exclusive gallery opening.
              </EventCardText>
              <EventCardPriorityThumb>
                <CardCategory>Art</CardCategory>
                <CardPriority $priority={'High'}>High</CardPriority>
                <CardLocation>Kyiv</CardLocation>
                <CardDate>12.07 at 12:00 am</CardDate>
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
