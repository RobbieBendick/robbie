import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import LeetCode from './components/LeetCode/LeetCode';
import Blog from './components/Blog/Blog';
import BlogPost from "./components/BlogPost/BlogPost";
import { Router } from "@reach/router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Router>
    <Home path='/'/>
    <Resume path='/resume'/>
    <Blog path='/blog'/>
    <BlogPost path='/post/:id'/>
    <LeetCode path='/leetcode'/>
  </Router>
);

