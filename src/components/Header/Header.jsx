import { MdExpandMore } from 'react-icons/md';

import {
  HeaderStyled,
  LogoText,
  LanguageButton,
  LanguageButtonText,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoText>Event Planner</LogoText>
      <div>
        <ul></ul>
        <LanguageButton type="button">
          <LanguageButtonText>UK</LanguageButtonText>
          <MdExpandMore size={24} color="#3F3F3F" />
        </LanguageButton>
      </div>
    </HeaderStyled>
  );
};
export default Header;
