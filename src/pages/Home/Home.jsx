import { AiOutlinePlus } from 'react-icons/ai';

import FilterByCaregory from 'components/FilterCategoryList';
import SortByCategory from 'components/SortCategoryList';
import Events from 'components/Events';

import {
  MenuWrap,
  Menu,
  AddEventLink,
  AddEventLinkText,
  MainTitle,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <MenuWrap>
        <Menu>
          <FilterByCaregory />
          <SortByCategory />
          <AddEventLink to={'newEvent'}>
            <AiOutlinePlus size={24} color="#FFFFFF" />
            <AddEventLinkText>Add new event</AddEventLinkText>
          </AddEventLink>
        </Menu>
        <MainTitle>My Events</MainTitle>
      </MenuWrap>

      <Events />
    </>
  );
};

export default Home;
