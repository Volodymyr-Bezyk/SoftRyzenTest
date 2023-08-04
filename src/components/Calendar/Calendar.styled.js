import styled from 'styled-components';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const FormLabel = styled.label`
  position: relative;
  width: 240px;

  margin-bottom: ${p => p.theme.space[10]}px;
  display: flex;
  flex-direction: column;

  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.accent};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const CalendarWrap = styled.div`
  position: relative;
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

export const CalendarMoreButton = styled.button`
  position: absolute;
  top: 24px;
  right: 12px;
  width: 130px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: end;

  svg {
    color: ${p => p.theme.colors.sortListItemColor};

    transition: color 250ms ease-in-out;
  }
`;

export const CalendarButtons = styled.div`
  position: absolute;
  top: 360px;
  left: 0;
  /* width: 240px; */
  width: 100%;
  z-index: 99999 !important;

  display: flex;
  justify-content: space-between;

  padding: 0 ${p => p.theme.space[10]}px;
  background-color: ${p => p.theme.colors.white};

  border-bottom-left-radius: ${p => p.theme.radii.calendar};
  border-bottom-right-radius: ${p => p.theme.radii.calendar};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    justify-content: flex-end;
  }
`;

export const CalendarButtonCancel = styled.button`
  margin-right: 15px;
  width: 75px;
  height: 32px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.secondary};
  border: ${p => p.theme.borders.button};
  background-color: ${p => p.theme.colors.white};
  text-align: center;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.33;

  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.buttonHoverBg};
    border-color: ${p => p.theme.colors.buttonHoverBg};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    margin-right: ${p => p.theme.space[8]}px;
    width: 75px;
  }
`;
export const CalendarButtonChoose = styled.button`
  width: 110px;
  height: 32px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.secondary};
  background-color: ${p => p.theme.colors.accent};
  text-align: center;

  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.33;

  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHoverBg};
  }
`;

export const StyledDatetime = styled(Datetime)`
  input {
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

    &::placeholder {
      color: ${p =>
        p.open ? p.theme.colors.accent : p.theme.colors.buttonTextColor};
      font-family: ${p => p.theme.fontFamily.primary};
      font-size: ${p => p.theme.fontSizes[4]}px;
      font-weight: ${p => p.theme.fontWeights.regular};
      line-height: ${p => p.theme.lineHeights.max};
      opacity: ${p => p.open && 1};
    }

    &:hover,
    &:focus {
      border-color: ${p => p.theme.colors.buttonHoverBg};
    }
  }

  .rdt {
    /* position: static; */
  }

  .rdtPicker {
    display: none;
    position: absolute;

    width: 100%;
    min-width: 240px;
    height: 348px;
    padding: 20px;

    margin-top: 8px;
    z-index: 99999 !important;

    border-top-right-radius: 11px;
    border-top-left-radius: 11px;
    background: #ffffff;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
  }

  .rdtPicker th {
    padding: 8px 2px;
    color: #3f3f3f;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
  }

  & .rdtPicker td {
    padding: 8px;
    color: #aca7c3;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.33;
  }

  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background-color: #7b61ff;
    color: #fff;
  }

  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    opacity: 0;
    pointer-events: none;
  }

  .rdtPicker td.rdtToday {
    position: relative;
    color: #7b61ff;
  }

  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #7b61ff;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }

  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    font-size: 30px;
  }

  .rdtPicker thead tr:first-of-type th:hover {
    color: #ffffff;
    background-color: #7b61ff;
  }

  td.rdtMonth:hover,
  td.rdtYear:hover {
    background-color: #6243ff;
    color: #ffffff;
  }

  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #7b61ff;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }

  .dow:first-child,
  .dow:last-child {
    color: #ff2b77;
  }
  tbody tr:last-child {
    display: none;
  }
  tfoot {
    display: none;
  }
`;
