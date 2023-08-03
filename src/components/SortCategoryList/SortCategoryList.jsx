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

const SortByCategory = () => {
  const [showSortingMenu, setShowSortingMenu] = useState(false);

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

        <SortText>Sort by</SortText>
        <TbAdjustmentsHorizontal size={24} />
      </SortButton>

      <SortList $showSortMenu={showSortingMenu}>
        {sortListOptions.map(({ text, type }, idx) => (
          <SortListItem key={idx}>
            <SortListItemButton type="button">
              <SortListItemButtonText>{text}</SortListItemButtonText>
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
