import { useState } from 'react';
import { LuFilter } from 'react-icons/lu';

import { filterOptions } from 'constants/filterListOptions';
import {
  FilterButtonWrap,
  FilterButton,
  FilterTextWrap,
  FilterText,
  FilterTextMobile,
  FilterList,
  FilterListItem,
  FilterListItemButton,
  FilterListItemText,
} from './FilterCategoryList.styled';

const FilterByCaregory = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  return (
    <FilterButtonWrap>
      <FilterButton
        $filterMenu={showFilterMenu}
        type="button"
        onClick={() => setShowFilterMenu(!showFilterMenu)}
      >
        <FilterText>Business</FilterText>
        <LuFilter size={24} />
        <FilterTextWrap $filterMenu={showFilterMenu}>
          <FilterTextMobile>Category</FilterTextMobile>
        </FilterTextWrap>
      </FilterButton>

      <FilterList $filterMenu={showFilterMenu}>
        {filterOptions.map(({ label }, idx) => (
          <FilterListItem key={idx}>
            <FilterListItemButton>
              <FilterListItemText>{label}</FilterListItemText>
            </FilterListItemButton>
          </FilterListItem>
        ))}
      </FilterList>
    </FilterButtonWrap>
  );
};

export default FilterByCaregory;
