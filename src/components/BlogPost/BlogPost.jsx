import "./BlogPost.scss";
import BlogPostList from "../BlogPostList/BlogPostList";
import Nav from "../Nav/Nav"
import { useEffect } from 'react';

let BlogPost = ({id}) => {

    // find which post was clicked on
    let filtered = BlogPostList.filter(item => item.id == id);
    useEffect(() => {
        document.title = `${filtered[0].title} | Robert`;
    }, []);
    return (
        <>
        <Nav />
        <div className='blog-post-container'>
            <h1 className='blog-post-title'>{filtered[0].title}</h1>

            {/* JSX element */}
            {filtered[0].body}
        </div>
        </>
    )


}

export default BlogPost