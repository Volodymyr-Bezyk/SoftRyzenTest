import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { useSearch } from 'hooks/useSearchField';

import {
  SearchLabel,
  SearchInput,
  SearchIcon,
  CloseIcon,
} from './SearchField.styled';

const SearchField = () => {
  const { searchField, setSearchField } = useSearch();

  return (
    <SearchLabel>
      <SearchInput
        type="text"
        placeholder="Search by keywords"
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
      />
      <SearchIcon type="button">
        <CiSearch size={24} color="#7B61FF" />
      </SearchIcon>
      {searchField && (
        <CloseIcon type="button" onClick={() => setSearchField('')}>
          <IoIosClose size={24} color="#7B61FF" />
        </CloseIcon>
      )}
    </SearchLabel>
  );
};

export default SearchField;
