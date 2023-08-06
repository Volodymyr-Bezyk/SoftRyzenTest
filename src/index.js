import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchFieldProvider } from 'hooks/useSearchField';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/softRyzenTest">
      <SearchFieldProvider>
        <App />
      </SearchFieldProvider>
    </BrowserRouter>
  </React.StrictMode>
);
