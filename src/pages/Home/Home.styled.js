import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuWrap = styled.div`
  @media (min-width: ${p => p.theme.screens.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AddEventLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};
  transition: background-color 250ms ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHoverBg};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;
    width: 193px;
    height: 56px;
  }
`;

export const AddEventLinkText = styled.span`
  display: none;
  margin-left: ${p => p.theme.space[8]}px;

  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
`;

export const MainTitle = styled.h1`
  display: none;
  margin-top: ${p => p.theme.space[20]}px;

  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[7]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: ${p => p.theme.space[0]}px;
    order: -1;
  }
`;
