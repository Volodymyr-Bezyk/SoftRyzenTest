import styled from 'styled-components';

import ContentLoader from 'react-content-loader';

export const PageSkeletonWrap = styled(ContentLoader)`
  width: 100%;

  @media (min-width: 768px) {
    /* width: 628px; */
  }
`;
