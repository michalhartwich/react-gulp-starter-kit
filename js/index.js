import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

window.pathTypes = [
  'backend',
  'devops',
  'frontend',
  'mobile',
];

ReactDOM.render(
  routes,
  document.getElementById('main')
);
