import styled from 'styled-components';

export const FormLabel = styled.label`
  position: relative;
  width: 240px;

  margin-bottom: ${p => p.theme.space[10]}px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const FormLabelText = styled.span`
  margin-bottom: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: 0.4px;
`;

export const FormLabelTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 156px;

  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[18]}px
    ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
  outline: none;
  caret-color: ${p => p.theme.colors.buttonTextColor};

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.input};
  transition: border-color 250ms ease-in-out;

  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.5;

  transition: border-color 250ms ease-in-out;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.buttonHoverBg};
  }
`;

export const ClearFormInputButton = styled.button`
  position: absolute;
  top: 40px;
  right: 12px;

  svg {
    color: ${p => p.theme.colors.accent};
    transition: color 250ms ease-in-out;
  }
`;

export const ValidationErrorText = styled.span`
  position: absolute;
  right: 19px;
  bottom: -20px;

  color: ${p => p.theme.colors.highPriority};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.33;
`;
