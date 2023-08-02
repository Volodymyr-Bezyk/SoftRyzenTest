import { AiOutlinePlus } from 'react-icons/ai';

import FilterByCaregory from 'components/FilterCategoryList';
import SortByCategory from 'components/SortCategoryList';

import { events } from 'constants/events';

import {
  Menu,
  AddEventLink,
  GalleryList,
  GalleryListItem,
  GalleryListCard,
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
} from './Home.styled';

const Home = () => {
  return (
    <>
      <Menu>
        <FilterByCaregory />
        <SortByCategory />

        <AddEventLink to={'newEvent'}>
          <AiOutlinePlus size={24} color="#FFFFFF" />
        </AddEventLink>
      </Menu>

      <GalleryList>
        {events.map(
          ({
            id,
            title,
            description,
            date,
            time,
            location,
            category,
            picture,
            priority,
          }) => (
            <GalleryListItem key={id}>
              <GalleryListCard>
                <CardThumb>
                  <PriorityWrapper>
                    <CardCategory>{category}</CardCategory>
                    <CardPriority $priority={priority}>{priority}</CardPriority>
                  </PriorityWrapper>
                  <CardImg src={picture} alt={title} />
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
                    <CardDescription>{description}</CardDescription>
                    <CardLinkWrap>
                      <CardMoreInfoLink>More info</CardMoreInfoLink>
                    </CardLinkWrap>
                  </CardInfo>
                </InfoThumb>
              </GalleryListCard>
            </GalleryListItem>
          )
        )}
      </GalleryList>
    </>
  );
};

export default Home;
