import { useState } from 'react';
import "./BlogPost.scss";
import { useParams } from 'react-router-dom';
import BlogPostList from "../../Assets/BlogPostList";

let BlogPost = () => {
    const { id } = useParams();

    // find which post was clicked on
    let filtered = BlogPostList.filter(item => item.id == id);

    return (
        <div className='blog-post-container'>
            <h1 className='blog-post-title light-slate-color'>{filtered[0].title}</h1>

            {/* JSX element */}
            {filtered[0].body}
        </div>
    )


}

export default BlogPost