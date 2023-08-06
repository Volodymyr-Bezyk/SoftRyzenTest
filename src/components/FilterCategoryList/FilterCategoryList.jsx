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

const FilterByCaregory = ({ category, setCategory }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(null);

  const activeCategory = idx => {
    if (activeCategoryIdx === idx) {
      setActiveCategoryIdx(null);
      setCategory('');
      return;
    }
    setActiveCategoryIdx(idx);
  };

  return (
    <FilterButtonWrap>
      <FilterButton
        $filterMenu={showFilterMenu}
        type="button"
        onClick={() => setShowFilterMenu(!showFilterMenu)}
      >
        <FilterText>{category || 'All'}</FilterText>
        <LuFilter size={24} />
        <FilterTextWrap $filterMenu={showFilterMenu}>
          <FilterTextMobile>Category</FilterTextMobile>
        </FilterTextWrap>
      </FilterButton>

      <FilterList $filterMenu={showFilterMenu}>
        {filterOptions.map(({ label }, idx) => (
          <FilterListItem key={idx}>
            <FilterListItemButton
              onClick={() => {
                setCategory(label);
                setShowFilterMenu(false);
                activeCategory(idx);
              }}
            >
              <FilterListItemText $active={idx === activeCategoryIdx}>
                {label}
              </FilterListItemText>
            </FilterListItemButton>
          </FilterListItem>
        ))}
      </FilterList>
    </FilterButtonWrap>
  );
};

export default FilterByCaregory;
