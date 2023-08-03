import styled from 'styled-components';

export const AppBarWrap = styled.div`
  padding-top: ${p => p.theme.space[12]}px;
  padding-bottom: ${p => p.theme.space[12]}px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    position: relative;
    padding-top: ${p => p.theme.space[13]}px;
    padding-bottom: ${p => p.theme.space[9]}px;
  }
`;
