import { AiOutlinePlus } from 'react-icons/ai';

import FilterByCaregory from 'components/FilterCategoryList';
import SortByCategory from 'components/SortCategoryList';
import Events from 'components/Events';

import { Menu, AddEventLink } from './Home.styled';

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

      <Events />
    </>
  );
};

export default Home;
