import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import reportWebVitals from './reportWebVitals';


var env = process.env.NODE_ENV === 'development';
console.log(process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path={env ? `/` : `${process.env.PUBLIC_URL}/`} element={<Home />}/>
        <Route path={env ? `/resume` : `${process.env.PUBLIC_URL}/resume`} element={<Resume />} />
      </Routes>
    </React.StrictMode>
  </Router>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
