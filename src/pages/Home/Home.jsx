import { useState } from 'react';

import { LuFilter } from 'react-icons/lu';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';

import {
  Menu,
  FilterButton,
  SortButtonWrap,
  SortButton,
  AddEventLink,
  SortTextWrap,
  SortText,
  SortList,
  SortListItem,
  SortListItemButton,
  SortListItemButtonText,
} from './Home.styled';
const Home = () => {
  const [showSortingMenu, setShowSortingMenu] = useState(false);

  const handleSortMenu = e => {
    setShowSortingMenu(!showSortingMenu);
    console.log(!showSortingMenu);
  };

  return (
    <Menu>
      <FilterButton type="button">
        <LuFilter size={24} color="#7B61FF" />
      </FilterButton>

      <SortButtonWrap>
        <SortButton
          $showSortMenu={showSortingMenu}
          type="button"
          onClick={() => handleSortMenu()}
        >
          <SortTextWrap $showSortMenu={showSortingMenu}>
            <SortText>Sort by</SortText>
          </SortTextWrap>

          <TbAdjustmentsHorizontal
            size={24}
            color="#7B61FF"
            style={{ zIndex: 3 }}
          />
        </SortButton>

        <SortList $showSortMenu={showSortingMenu}>
          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by name</SortListItemButtonText>
              <IoIosArrowRoundUp size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>
          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by name</SortListItemButtonText>
              <IoIosArrowRoundDown size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>

          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by data</SortListItemButtonText>
              <IoIosArrowRoundUp size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>
          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by data</SortListItemButtonText>
              <IoIosArrowRoundDown size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>

          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by priority</SortListItemButtonText>
              <IoIosArrowRoundUp size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>
          <SortListItem>
            <SortListItemButton type="button">
              <SortListItemButtonText>by priority</SortListItemButtonText>
              <IoIosArrowRoundDown size={24} color="#ACA7C3" />
            </SortListItemButton>
          </SortListItem>
        </SortList>
      </SortButtonWrap>

      <AddEventLink>
        <AiOutlinePlus size={24} color="#FFFFFF" />
      </AddEventLink>
    </Menu>
  );
};

export default Home;
