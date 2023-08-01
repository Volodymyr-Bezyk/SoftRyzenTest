import { useState } from 'react';

import { LuFilter } from 'react-icons/lu';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';

// import {
//   Menu,
//   MenuBtn,
//   FilterText,
//   CreateNewEvent,
//   SortListWrap,
//   SortList,
//   SortListItem,
//   SortListItemButton,
//   SortListItemText,
// } from './Home.styled';

// const Home = () => {
//   const [showSortingMenu, setShowSortingMenu] = useState(false);

//   const handleSortMenu = e => {
//     setShowSortingMenu(!showSortingMenu);
//     console.log(!showSortingMenu);
//   };

//   return (
//     <div>
//       <Menu>
//         {/* <SortListWrap> */}
//         <MenuBtn type="button">
//           <LuFilter size={24} color="#7B61FF" />
//         </MenuBtn>
//         {/* </SortListWrap> */}

//         {/* <SortListWrap> */}
//           <MenuBtn type="button" onClick={() => handleSortMenu()}>
//             <FilterText $showSortMenu={showSortingMenu}>Sort by</FilterText>
//             <TbAdjustmentsHorizontal size={24} color="#7B61FF" />
//           </MenuBtn>

//           <SortList $showSortMenu={showSortingMenu}>
//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by name</SortListItemText>
//                 <IoIosArrowRoundUp size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>

//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by name</SortListItemText>
//                 <IoIosArrowRoundDown size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>

//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by data</SortListItemText>
//                 <IoIosArrowRoundUp size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>

//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by data</SortListItemText>
//                 <IoIosArrowRoundDown size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>

//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by priority</SortListItemText>
//                 <IoIosArrowRoundUp size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>

//             <SortListItem>
//               <SortListItemButton type="button">
//                 <SortListItemText>by priority</SortListItemText>
//                 <IoIosArrowRoundDown size={24} color="#ACA7C3" />
//               </SortListItemButton>
//             </SortListItem>
//           </SortList>
//         {/* </SortListWrap> */}

//         <div>
//           <CreateNewEvent>
//             <AiOutlinePlus size={24} color="#FFFFFF" />
//           </CreateNewEvent>
//         </div>
//       </Menu>
//     </div>
//   );
// };

import {
  Menu,
  FilterButton,
  SortButtonWrap,
  SortButton,
  AddEventLink,
  SortTextWrap,
  SortText,
  SortList,
} from './Home.styled';
const Home = () => {
  const [showSortingMenu, setShowSortingMenu] = useState(false);

  const handleSortMenu = e => {
    setShowSortingMenu(!showSortingMenu);
    console.log(!showSortingMenu);
  };

  return (
    <Menu>
      {!showSortingMenu && (
        <FilterButton type="button">
          <LuFilter size={24} color="#7B61FF" />
        </FilterButton>
      )}

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
          <li>
            <button type="button"></button>
          </li>
        </SortList>
      </SortButtonWrap>

      <AddEventLink>
        <AiOutlinePlus size={24} color="#FFFFFF" />
      </AddEventLink>
    </Menu>
  );
};

export default Home;
