import { useState } from 'react';
import { LuFilter } from 'react-icons/lu';

import { filterOptions } from 'constants/filterListOptions';
import {
  FilterButtonWrap,
  FilterButton,
  FilterTextWrap,
  FilterText,
  FilterList,
  FilterListItem,
  FilterListItemButton,
  FilterListItemText,
} from './FilterCategoryList.styled';

const FilterByCaregory = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(true);

  return (
    <FilterButtonWrap>
      <FilterButton
        $filterMenu={showFilterMenu}
        type="button"
        onClick={() => {
          setShowFilterMenu(!showFilterMenu);
          console.log(!showFilterMenu);
        }}
      >
        <LuFilter size={24} />
        <FilterTextWrap $filterMenu={showFilterMenu}>
          <FilterText>Category</FilterText>
        </FilterTextWrap>
      </FilterButton>

      <FilterList $filterMenu={showFilterMenu}>
        {filterOptions.map((option, idx) => (
          <FilterListItem key={idx}>
            <FilterListItemButton>
              <FilterListItemText>{option}</FilterListItemText>
            </FilterListItemButton>
          </FilterListItem>
        ))}
      </FilterList>
    </FilterButtonWrap>
  );
};

export default FilterByCaregory;
