import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import { history } from '@/store';
import Layout from '@/layouts';
import { ErrorBoundary } from '@/pages';

function App() {

  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </ConnectedRouter>
    </BrowserRouter>
  );
}

export default App;
