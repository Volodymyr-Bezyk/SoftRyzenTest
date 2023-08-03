import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    color: ${p => p.theme.colors.accent};
    transition: color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    svg,
    span {
      color: ${p => p.theme.colors.hover};
    }
  }
`;
export const BackButtonText = styled.span`
  margin-left: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};
  transition: color 250ms ease-in-out;
`;

export const EventCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EventTitle = styled.h2`
  margin-top: ${p => p.theme.space[12]}px;

  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[7]}px;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: 17px;
  }
`;

export const EventCard = styled.div`
  margin-top: ${p => p.theme.space[12]}px;

  border-radius: ${p => p.theme.radii.primary};
  box-shadow: ${p => p.theme.shadows.card};
  background-color: ${p => p.theme.colors.white};

  overflow: hidden;

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: ${p => p.theme.space[7]}px;
    width: 628px;
  }
`;

export const EventCardImg = styled.img`
  width: 272px;
  height: 168px;
  background-size: cover;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 688px;
    height: 272px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 628px;
  }
`;

export const DetailsThumb = styled.div`
  padding: ${p => p.theme.space[12]}px ${p => p.theme.space[8]}px
    ${p => p.theme.space[20]}px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[12]}px ${p => p.theme.space[12]}px
      ${p => p.theme.space[20]}px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    padding: ${p => p.theme.space[10]}px ${p => p.theme.space[5]}px
      ${p => p.theme.space[20]}px;
  }
`;

export const EventCardText = styled.p`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.42;
`;

export const EventCardPriorityThumb = styled.div`
  margin-top: ${p => p.theme.space[12]}px;
  display: flex;
  flex-wrap: wrap;
`;

export const CardCategory = styled.span`
  margin-right: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;

  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.card};
`;

export const CardPriority = styled.span`
  margin-right: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};

  color: ${p =>
    p.$priority === 'Low'
      ? p.theme.colors.lowPriority
      : p.theme.colors.mediumPriority};
  color: ${p => p.$priority === 'High' && p.theme.colors.highPriority};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;

  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.card};
`;

export const CardLocation = styled.span`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.71;

  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.card};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    margin-right: ${p => p.theme.space[6]}px;
  }
`;

export const CardDate = styled.span`
  margin-top: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.71;

  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.card};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    margin-top: ${p => p.theme.space[0]}px;
  }
`;

export const ButtonsThumb = styled.div`
  margin-top: ${p => p.theme.space[20]}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: ${p => p.theme.space[12]}px;
  }
`;

export const CardEditLink = styled(Link)`
  margin-right: ${p => p.theme.space[12]}px;
  width: 108px;
  height: 32px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.secondary};
  border: ${p => p.theme.borders.button};
  background-color: ${p => p.theme.colors.white};
  text-decoration: none;
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
    width: 55px;
  }
`;

export const CardDeleteButton = styled.button`
  width: 108px;
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
