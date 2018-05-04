import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddTodo from './containers/AddTodo';

import './global.scss';

const store = createStore(reducer);
const Index = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
      </div>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
