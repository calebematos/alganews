import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound404 from './views/NotFound404.view';
import Contact from './views/Contact.view';
import Home from './views/Home.view';
import UserView from './views/User.view';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={'/'} exact component={Home} />          
          <Route path={'/contact'} exact component={Contact} />
          <Route path={'/user/:userId'} component={UserView} />
          <Route component={NotFound404} />        
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
