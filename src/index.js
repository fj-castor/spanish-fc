import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import App from './components/App';
import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);