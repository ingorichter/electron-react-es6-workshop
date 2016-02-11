'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

ReactDOM.render(<Clock city="San Francisco" locale="en-US" timezone="America/Los_Angeles"/>, document.getElementById('clock'));
