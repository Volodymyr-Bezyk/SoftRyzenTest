import styled from 'styled-components';
import { Space } from 'antd';

export const ClockMoreButton = styled.button`
  position: absolute;
  top: 24px;
  right: 12px;
  width: 150px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: end;

  svg {
    color: ${p => p.theme.colors.sortListItemColor};

    transition: color 250ms ease-in-out;
  }
`;

export const ClockWrap = styled(Space)`
  width: 100%;

  .ant-space-item {
    width: 100%;
  }

  .ant-picker {
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

    &:hover,
    &:focus {
      border-color: ${p => p.theme.colors.buttonHoverBg};
    }

    input {
      color: ${p => p.theme.colors.buttonTextColor};
      font-family: ${p => p.theme.fontFamily.primary};
      font-size: ${p => p.theme.fontSizes[4]}px;
      font-weight: ${p => p.theme.fontWeights.regular};
      line-height: 1.5;
    }

    input::placeholder {
      color: ${p =>
        p.$open ? p.theme.colors.accent : p.theme.colors.buttonTextColor};

      font-family: ${p => p.theme.fontFamily.primary};
      font-size: ${p => p.theme.fontSizes[4]}px;
      font-weight: ${p => p.theme.fontWeights.regular};
      line-height: ${p => p.theme.lineHeights.max};

      opacity: ${p => p.$open && 1};
    }

    svg {
      display: none;
    }
  }

  .ant-picker-dropdown {
    width: 100%;
    background-color: red;
  }
`;
