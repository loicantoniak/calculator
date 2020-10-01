import React from 'react';
import Calculatrice from './src/Composants/Calculatrice';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from './src/reducers';

const store = createStore(reducers);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Calculatrice />
      </Provider>
    </>
  );
}
