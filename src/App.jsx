import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import { history } from '@/store';
import Layout from '@/layouts';

function App() {

  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </BrowserRouter>
  );
}

export default App;
