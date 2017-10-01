import React from 'react';
import { Provider } from 'mobx-react';
import { render } from 'react-dom';

import Search from './screens/Search';
import SearchStore from './stores/SearchStore';
import './styles.css';

const App = () => (
  <Provider searchStore={SearchStore}>
    <Search />
  </Provider>
);
render(<App />, document.getElementById('root'));
