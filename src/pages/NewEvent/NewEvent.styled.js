import styled from 'styled-components';

export const FormWrap = styled.div`
  margin-top: ${p => p.theme.space[12]}px;
  padding: ${p => p.theme.space[20]}px ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.form};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[20]}px ${p => p.theme.space[12]}px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: 25px;
    padding: ${p => p.theme.space[20]}px ${p => p.theme.space[20]}px
      ${p => p.theme.space[27]}px;
  }
`;

export const FormInnerDelimeter = styled.div`
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    height: 500px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    height: 300px;
  }
`;

export const Formlabel = styled.label`
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

export const FormLabelInput = styled.input`
  width: 100%;
  height: 56px;

  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[18]}px
    ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
  outline: none;

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.input};
  caret-color: ${p => p.theme.colors.buttonTextColor};

  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.5;

  transition: border-color 250ms ease-in-out;
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
`;

export const FormLabelSelect = styled.select`
  width: 100%;
  height: 56px;

  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[18]}px
    ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
  outline: none;

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.input};
  transition: border-color 250ms ease-in-out;

  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.5;
`;

export const AddEventButton = styled.button`
  margin-top: ${p => p.theme.space[20]}px;

  display: block;
  width: 100%;
  height: 56px;
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.primary};
  background-color: ${p => p.theme.colors.accent};
  text-align: center;

  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHoverBg};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    margin-top: ${p => p.theme.space[10]}px;
    margin-left: auto;
    width: 193px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: ${p => p.theme.space[20]}px;
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
