import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import PageSkeleton from 'components/PageSkeleton';
import { LayoutWrap, Heading, MainContent } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrap>
      <Heading>
        <Container>
          <AppBar />
        </Container>
      </Heading>

      <MainContent>
        <Container>
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
    </LayoutWrap>
  );
};

export default Layout;
