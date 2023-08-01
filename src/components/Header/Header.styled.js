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

export const LanguageButton = styled.button`
  display: flex;
  width: 69px;

  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[2]}px
    ${p => p.theme.space[6]}px ${p => p.theme.space[6]}px;
  align-items: center;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.langButton};
  box-shadow: ${p => p.theme.shadows.langButton};
`;

export const LanguageButtonText = styled.p`
  display: inline-block;
  color: ${p => p.theme.colors.languageButtonTextColor};

  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.max};
`;
