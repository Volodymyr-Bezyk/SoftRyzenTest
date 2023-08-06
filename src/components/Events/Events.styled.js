import styled from 'styled-components';

export const EventList = styled.ul`
  margin-top: ${p => p.theme.space[20]}px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${p => p.theme.space[12]}px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${p => p.theme.space[12]}px;
  }
`;
