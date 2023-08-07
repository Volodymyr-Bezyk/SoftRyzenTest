import EllipsisText from 'react-ellipsis-text';
import { dateFormatter } from 'utils/dateFormatter';
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

  const formattedDate = dateFormatter(date);

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
              {formattedDate.split('.')[0]}.{formattedDate.split('.')[1]}.
              {formattedDate.slice(-2)} at{' '}
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
                $disabled={Date.parse(date) <= Date.now()}
                state={{ from: linkLocation }}
                to={`event/${id}`}
              >
                {Date.parse(date) > Date.now() ? 'More info' : 'Expired'}
              </CardMoreInfoLink>
            </CardLinkWrap>
          </CardInfo>
        </InfoThumb>
      </EventListCard>
    </EventListItem>
  );
};

export default EventListCardItem;
