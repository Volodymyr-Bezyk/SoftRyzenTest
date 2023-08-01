import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 272px;
  height: 48px;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[24]}px;
  outline: none;
  border: none;

  border-radius: ${p => p.theme.radii.input};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.inputShadow};

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.max};

  &::placeholder {
    color: ${p => p.theme.colors.placeholderColor};
    font-family: ${p => p.theme.fontFamily.primary};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.light};
    line-height: ${p => p.theme.lineHeights.max};
  }
`;

export const SearchLabel = styled.label`
  display: block;
  position: relative;
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const CloseIcon = styled.span`
  display: none;
  position: absolute;
  top: 12px;
  right: 12px;
`;
