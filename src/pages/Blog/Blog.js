import React from "react";
import {blogs} from "../../data.js";
import Footer from "../../shared/Footer.js";
import SingleBlog from "./SingleBlog.js";
const Blog = () => {
  return (
    <>
    <section className="py-10 text-gray-200 font-JosefinSans">
      <div className="">
        <h2 className="section-title mb-6 text-white">My Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Blog;
