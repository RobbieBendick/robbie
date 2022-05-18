import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch as Routes } from "react-router-dom";
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

import reportWebVitals from './reportWebVitals';


var env = process.env.NODE_ENV === 'development';
console.log(process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} exact render={props => <Home {...props} />}/>
          <Route path={"/resume"} exact render={props => <Resume {...props} />} />
        </Routes>
      </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
