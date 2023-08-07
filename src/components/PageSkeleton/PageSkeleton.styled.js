import styled from 'styled-components';

import ContentLoader from 'react-content-loader';

export const PageSkeletonContent = styled(ContentLoader)`
  width: 100%;

  @media (min-width: 1440px) {
    width: 60%;
  }
`;

export const PageSkeletonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LayoutSkeletonWrap = styled(ContentLoader)`
  width: 100%;
`;
