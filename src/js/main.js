import React from 'react';
import ReactDOM from 'react-dom';
import EightBall from './components/eightBall';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

ReactDOM.render(
  <div>
    <EightBall />
  </div>
  ,document.getElementById('main'));

  


