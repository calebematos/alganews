import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound404 from './app/views/NotFound404.view';
import Contact from './app/views/Contact.view';
import Home from './app/views/Home.view';
import UserView from './app/views/User.view';
import Navbar from './app/components/Navbar';
import GlobalStyles from './core/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={Home} />          
        <Route path={'/contact'} exact component={Contact} />
        <Route path={'/user/:userId'} component={UserView} />
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
