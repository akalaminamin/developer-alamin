import React from "react";
const SingleBlog = ({ blog }) => {
  return (
    <>
      <div>
        <a href={blog.blogLink} target="_blank">
          <div>
            <img className="w-full rounded-md" src={blog.imgLink} alt="blog" />
          </div>
          <h2 className="text-xl my-3">{blog.title}</h2>
          <p className="text-[14px] md:text-[16px]">{blog.description.slice(0, 110)}</p>
        </a>
      </div>
    </>
  );
};

export default SingleBlog;
