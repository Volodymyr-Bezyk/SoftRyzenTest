import { AiOutlinePlus } from 'react-icons/ai';

import FilterByCaregory from 'components/FilterCategoryList';
import SortByCategory from 'components/SortCategoryList';

import { Menu, AddEventLink } from './Home.styled';

const Home = () => {
  return (
    <Menu>
      <FilterByCaregory />
      <SortByCategory />

      <AddEventLink>
        <AiOutlinePlus size={24} color="#FFFFFF" />
      </AddEventLink>
    </Menu>
  );
};

export default Home;
