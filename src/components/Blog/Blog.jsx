import "./Blog.scss";
import React from "react";
import BlogPostList from "../../Assets/BlogPostList";

let Blog = () => {
        return (
            <>
            {BlogPostList.map(d => {
                return (
                    <div className="blog-list-container" key={d.title}>
                        <h2 className="blog-list-title light-slate-color"><a href={d.href}>{d.title}</a></h2>
                        <div>{d.titleDescription}</div>
                    </div>
                )
            })}
     
            </>
        )
}

export default Blog;