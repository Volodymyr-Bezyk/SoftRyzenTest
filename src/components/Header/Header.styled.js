import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[12]}px;
`;

export const LogoText = styled.p`
  color: ${p => p.theme.colors.logoText};

  font-family: ${p => p.theme.fontFamily.secondary};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const LanguageBlock = styled.div`
  position: relative;
`;

export const LanguageButton = styled.button`
  display: flex;
  width: 69px;

  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[2]}px
    ${p => p.theme.space[6]}px ${p => p.theme.space[6]}px;
  align-items: center;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.langButton};
  box-shadow: ${p => p.theme.shadows.langButton};

  svg {
    color: ${p =>
      p.$langList ? p.theme.colors.accent : p.theme.colors.buttonTextColor};
    transition: color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.accent};
    }
  }
`;

export const LanguageButtonText = styled.p`
  display: inline-block;
  color: ${p => p.theme.colors.languageButtonTextColor};

  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.max};
`;

export const LanguageList = styled.ul`
  position: absolute;
  top: 101%;
  left: 0;
  z-index: 1;

  width: 69px;
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$langList ? 1 : 0)};
  pointer-events: ${p => (p.$langList ? 'all' : 'none')};
  transition: opacity 300ms ease-in-out;
`;
export const LanguageListItem = styled.li`
  padding-bottom: ${p => p.theme.space[2]}px;
  border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const LanguageListItemButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    span {
      color: ${p => p.theme.colors.accent};
    }
  }
`;

export const LanguageListItemButtonText = styled.span`
  color: ${p => p.theme.colors.sortListItemColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.25;
  transition: color 250ms ease-in-out;
`;
