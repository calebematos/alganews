import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound404 from './app/views/NotFound404.view';
import Home from './app/views/Home.view';
import GlobalStyles from './core/globalStyles';
import EditorsListView from './app/views/EditorsList.view';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />          
        <Route path={'/editors'} exact component={EditorsListView} />        
        <Route component={NotFound404} />        
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
