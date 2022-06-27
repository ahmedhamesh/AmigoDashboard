import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import getQuery from './utilities/query';

ReactDOM.render(<QueryClientProvider client={getQuery()}><BrowserRouter><App /></BrowserRouter></QueryClientProvider>, document.getElementById('root'))

