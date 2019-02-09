import React from 'react';
import AppContainer from './navigation/RootNavigator.js';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './redux/reducers';
// import styles from './styles';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
