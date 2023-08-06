import EllipsisText from 'react-ellipsis-text';
import { convertTimeFormat } from 'utils/converTimeFormat';
import defaultPhoto from '../../assets/default.jpg';

import {
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
} from './EventListCardItem.styled';

const EventListCardItem = props => {
  const {
    card: {
      id,
      title,
      description,
      date,
      time,
      location,
      category,
      picture = defaultPhoto,
      priority,
    },
    linkLocation,
  } = props;

  return (
    <EventListItem>
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
              {date.split('.')[0]}.{date.split('.')[1]}.{date.slice(-2)} at{' '}
              {convertTimeFormat(time).split(' ')[0]}
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
  );
};

export default EventListCardItem;
