import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';

import {
  SearchLabel,
  SearchInput,
  SearchIcon,
  CloseIcon,
} from './SearchField.styled';

const SearchField = () => {
  return (
    <SearchLabel>
      <SearchInput type="text" placeholder="Search by keywords" />
      <SearchIcon>
        <CiSearch size={24} color="#7B61FF" />
      </SearchIcon>
      <CloseIcon>
        <IoIosClose size={24} color="#7B61FF" />
      </CloseIcon>
    </SearchLabel>
  );
};

export default SearchField;
