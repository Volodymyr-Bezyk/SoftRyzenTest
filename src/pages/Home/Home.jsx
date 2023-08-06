import { useState } from 'react';
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
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  return (
    <>
      <MenuWrap>
        <Menu>
          <FilterByCaregory setCategory={setCategory} category={category} />
          <SortByCategory sortBy={sortBy} setSortBy={setSortBy} />
          <AddEventLink to={'newEvent'}>
            <AiOutlinePlus size={24} color="#FFFFFF" />
            <AddEventLinkText>Add new event</AddEventLinkText>
          </AddEventLink>
        </Menu>
        <MainTitle>My Events</MainTitle>
      </MenuWrap>

      <Events category={category} sortBy={sortBy} />
    </>
  );
};

export default Home;
