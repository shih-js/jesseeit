import React from 'react';
import ReactDOM from 'react-dom';
import Jesseeit from './components/Jesseeit';

const anchor = document.createElement('div');
anchor.id = 'jesseeit';

document.body.insertBefore(anchor, document.body.childNodes[0]);

ReactDOM.render(<Jesseeit />, document.getElementById('jesseeit'));
