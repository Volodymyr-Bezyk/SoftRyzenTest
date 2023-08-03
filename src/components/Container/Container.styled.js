import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[12]}px;
  margin: 0 auto;

  @media (min-width: ${p => p.theme.screens.mobile}) {
    max-width: ${p => p.theme.screens.mobile};
  }
  @media (min-width: ${p => p.theme.screens.tablet}) {
    max-width: ${p => p.theme.screens.tablet};
    padding: ${p => p.theme.space[0]}px ${p => p.theme.space[20]}px;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    max-width: ${p => p.theme.screens.desktop};
    padding: ${p => p.theme.space[0]}px ${p => p.theme.space[40]}px;
  }
`;
