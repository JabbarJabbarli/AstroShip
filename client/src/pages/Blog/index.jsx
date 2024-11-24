import React from "react";
import { btn, links } from "../../data/navbar.js";
import  Header  from "../../components/Header/index";
import OurBlog from "../../components/OurBlogSection/index.jsx";
import { blogPic } from "../../data/ourBlog.js";

const Blog = () => {
  return (
    <div>
      <Header btn={btn} links={links} />
      <OurBlog blogPic={blogPic}/>
    </div>
  );
};

export default Blog;
