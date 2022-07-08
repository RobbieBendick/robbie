import "./BlogPost.scss";
import BlogPostList from "../BlogPostList/BlogPostList";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav"
import { useEffect } from 'react';

let BlogPost = ({id}) => {

    // find which post was clicked on
    let filtered = BlogPostList.filter(e => e.id == id);

    useEffect(() => {
        document.title = `${filtered[0].title} | Robert`;
    }, [filtered]);

    return (
        <>
        <Nav />
        <div className='blog-post-container'>
            <a className="back-button" href="/blog"><i class="fa-solid fa-arrow-left"></i> Back</a>
            <h1 className='blog-post-title'>{filtered[0].title}</h1>

            {/* JSX element */}
            {filtered[0].body}
        </div>
        <Footer />
        </>
    )
}

export default BlogPost