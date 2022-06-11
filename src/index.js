import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/resume' element={<Resume />} />
    </Routes>
  </Router>
);

