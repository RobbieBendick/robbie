import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/resume' exact element={<Resume />} />
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
