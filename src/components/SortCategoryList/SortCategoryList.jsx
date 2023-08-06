import { useState } from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';

import { sortListOptions } from 'constants/sortListOptions';
import {
  SortButtonWrap,
  SortButton,
  SortTextWrap,
  SortText,
  SortTextMobile,
  SortList,
  SortListItem,
  SortListItemButton,
  SortListItemButtonText,
} from './SortCategoryList.styled';

const SortByCategory = ({ sortBy, setSortBy }) => {
  const [showSortingMenu, setShowSortingMenu] = useState(false);
  const [activeSortIdx, setActiveSortIdx] = useState(null);

  const activeSort = idx => {
    if (activeSortIdx === idx) {
      setActiveSortIdx(null);
      setSortBy('');
      return;
    }
    setActiveSortIdx(idx);
  };

  return (
    <SortButtonWrap $showSortMenu={showSortingMenu}>
      <SortButton
        $showSortMenu={showSortingMenu}
        type="button"
        onClick={() => setShowSortingMenu(!showSortingMenu)}
      >
        <SortTextWrap $showSortMenu={showSortingMenu}>
          <SortTextMobile>Sort by</SortTextMobile>
        </SortTextWrap>

        <SortText>
          Sort by {sortBy && sortListOptions[activeSortIdx].key}
        </SortText>

        {sortBy &&
          (sortBy.split('.')[1] === 'inc' ? (
            <IoIosArrowRoundUp size={24} color="#3F3F3F" />
          ) : (
            <IoIosArrowRoundDown size={24} color="#3F3F3F" />
          ))}

        {!sortBy && <TbAdjustmentsHorizontal size={24} />}
      </SortButton>

      <SortList $showSortMenu={showSortingMenu}>
        {sortListOptions.map(({ value, label, type }, idx) => (
          <SortListItem key={idx}>
            <SortListItemButton
              type="button"
              onClick={() => {
                setSortBy(value + '.' + type);
                setShowSortingMenu(false);
                activeSort(idx);
              }}
            >
              <SortListItemButtonText $active={idx === activeSortIdx}>
                {label}
              </SortListItemButtonText>
              {type === 'inc' ? (
                <IoIosArrowRoundUp size={24} color="#ACA7C3" />
              ) : (
                <IoIosArrowRoundDown size={24} color="#ACA7C3" />
              )}
            </SortListItemButton>
          </SortListItem>
        ))}
      </SortList>
    </SortButtonWrap>
  );
};

export default SortByCategory;
