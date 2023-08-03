import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';
import theme from 'theme/theme';

const Home = lazy(() => import('pages/Home'));
const NewEvent = lazy(() => import('pages/NewEvent'));
const Event = lazy(() => import('pages/Event'));
const EditEvent = lazy(() => import('pages/EditEvent'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="newEvent" element={<NewEvent />} />
          <Route path="event/:eventId" element={<Event />} />
          <Route path="edit/:eventId" element={<EditEvent />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
