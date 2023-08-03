import styled from 'styled-components';
import mainBg from 'assets/Vector.svg';

export const LayoutWrap = styled.div`
  background-color: ${p => p.theme.colors.bg};
`;

export const Heading = styled.section`
  border-bottom: ${p => p.theme.borders.main};
`;

export const MainContent = styled.main`
  padding-top: ${p => p.theme.space[20]}px;
  padding-bottom: ${p => p.theme.space[21]}px;
  background-image: url(${mainBg});

  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding-bottom: 125px;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    padding-top: ${p => p.theme.space[30]}px;
    padding-bottom: ${p => p.theme.space[39]}px;
  }
`;
