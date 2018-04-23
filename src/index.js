import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';
import Greeting from './components/greeting/Greeting';

const Index = () => {
  return (
    <div>
      <Greeting name={'Matt'} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
