import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Todo from './components/Todo/Todo';
import LoadingBar from './components/LoadingBar/LoadingBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/todo' element={<Todo />} />
      <Route path='/loading' element={<LoadingBar />} />
    </Routes>
  </Router>
);
