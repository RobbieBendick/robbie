import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import LeetCode from './components/LeetCode/LeetCode';
import Blog from './components/Blog/Blog';
import BlogPost from "./components/BlogPost/BlogPost"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/resume' element={<Resume />} />
      <Route path='/leetcode' element={<LeetCode />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='post/:id' element={<BlogPost />} />
    </Routes>
  </Router>
);

