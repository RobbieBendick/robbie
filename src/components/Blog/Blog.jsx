import "./Blog.scss";
import React from "react";
import BlogPostList from "../../components/BlogPostList/BlogPostList";
import Nav from "../Nav/Nav";

let Blog = () => {
        return (
            <>
            <Nav />
            <div className="blog-parent">
            
                {BlogPostList.map(d => {
                    return (
                        <div className="blog-list-container" key={d.title}>
                            <h2 className="blog-list-title"><a href={d.href}>{d.title}</a></h2>
                            <div>{d.titleDescription}</div>
                        </div>
                    )
                })}
            </div>
            </>
        )
}

export default Blog;