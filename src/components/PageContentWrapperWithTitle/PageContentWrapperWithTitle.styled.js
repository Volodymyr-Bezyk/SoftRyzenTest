import styled from 'styled-components';

export const EventCardWrap = styled.div`
  padding-top: ${p => p.theme.space[12]}px;

  display: flex;
  flex-direction: column;
  align-items: ${p => (p.$align === 'center' ? 'center' : 'normal')};

  @media (min-width: ${p => p.theme.screens.desktop}) {
    padding-top: 17px;
  }
`;

export const EventTitle = styled.h2`
  color: ${p => p.theme.colors.buttonTextColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[7]}px;
  }
`;
