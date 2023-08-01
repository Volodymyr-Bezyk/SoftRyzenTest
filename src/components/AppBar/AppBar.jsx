import Header from 'components/Header';

import { AppBarWrap } from './AppBar.styled';
import SearchField from 'components/SearchField';

const SearchBar = () => {
  return (
    <AppBarWrap>
      <Header />
      <SearchField />
    </AppBarWrap>
  );
};

export default SearchBar;
