import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EventListItem = styled.li`
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.card};
  height: 480px;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[12]}px;

    @media (min-width: ${p => p.theme.screens.tablet}) {
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  }

  &:hover {
    & .infoThumb {
      transform: translateY(-104px);

      @media (min-width: ${p => p.theme.screens.tablet}) {
        transform: translateY(-96px);
      }
    }
  }
`;

export const EventListCard = styled.div``;

export const CardThumb = styled.div`
  position: relative;
`;
export const PriorityWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  align-items: center;
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
  text-transform: capitalize;
`;
export const CardPriority = styled.span`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};

  color: ${p =>
    p.$priority === 'low'
      ? p.theme.colors.lowPriority
      : p.theme.colors.mediumPriority};
  color: ${p => p.$priority === 'high' && p.theme.colors.highPriority};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;
  text-transform: capitalize;
`;

export const CardImg = styled.img`
  width: 272px;
  height: 336px;
  object-fit: cover;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 332px;
    height: 336px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 302px;
  }
`;

export const InfoThumb = styled.div`
  transform: translateY(-40px);
  transition: transform 250ms ease-in-out;
`;

export const TimeDetails = styled.div`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.8);
`;
export const CardDate = styled.span`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.71;
`;
export const CardLocation = styled.span`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.71;
`;

export const CardInfo = styled.div`
  background-color: ${p => p.theme.colors.white};
`;
export const CardTitle = styled.h2`
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[8]}px
    ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.title};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
  text-transform: capitalize;
`;
export const CardDescription = styled.p`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
  height: 88px;

  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.42;
`;

export const CardLinkWrap = styled.div`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px
    ${p => p.theme.space[8]}px;
`;
export const CardMoreInfoLink = styled(Link)`
  display: block;
  width: 114px;
  margin-left: auto;

  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[12]}px;
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p =>
    p.$disabled ? p.theme.colors.disabled : p.theme.colors.accent};
  box-shadow: ${p => p.theme.shadows.button};
  text-decoration: none;

  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.42;
  text-align: center;

  transition: background-color 250ms ease-in-out;

  cursor: ${p =>
    p.$disabled ? p.theme.cursor.notAllow : p.theme.cursor.pointer};

  pointer-events: ${p =>
    p.$disabled ? p.theme.pEvents.none : p.theme.pEvents.all};

  &:hover,
  &:focus {
    background-color: ${p =>
      p.$disabled ? p.theme.colors.disabled : p.theme.colors.buttonHoverBg};
  }
`;
