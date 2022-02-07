import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '@/store';
import Layout from '@/layouts';
import { ErrorBoundary, SplashPage } from '@/pages';

// libraries's css
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {

  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Suspense fallback={<SplashPage />}>
            <Layout />
          </Suspense>
        </ErrorBoundary>
      </ConnectedRouter>
    </BrowserRouter>
  );
}

export default App;
