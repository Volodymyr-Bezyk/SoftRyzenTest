import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

import { languagesOptions } from 'constants/languagesOptions';

import {
  HeaderStyled,
  LogoText,
  LanguageBlock,
  LanguageButton,
  LanguageButtonText,
  LanguageList,
  LanguageListItem,
  LanguageListItemButton,
  LanguageListItemButtonText,
} from './Header.styled';

const Header = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <HeaderStyled>
      <LogoText>Event Planner</LogoText>

      <LanguageBlock>
        <LanguageButton
          $langList={showLanguages}
          type="button"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          <LanguageButtonText>UK</LanguageButtonText>
          <MdExpandMore size={24} />
        </LanguageButton>

        <LanguageList $langList={showLanguages}>
          {languagesOptions.map(({ label }, idx) => (
            <LanguageListItem key={idx}>
              <LanguageListItemButton type="button">
                <LanguageListItemButtonText>{label}</LanguageListItemButtonText>
              </LanguageListItemButton>
            </LanguageListItem>
          ))}
        </LanguageList>
      </LanguageBlock>
    </HeaderStyled>
  );
};
export default Header;
