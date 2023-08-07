import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <Suspense fallback={<PageSkeleton layout="layout" />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
    </LayoutWrap>
  );
};

export default Layout;
