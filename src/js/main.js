import React from 'react';
import ReactDOM from 'react-dom';

import BillboardApp from './BillboardApp.js';

window.addEventListener('load', function(e) {
  ReactDOM.render(<BillboardApp />, document.getElementById('react-app'));
});
