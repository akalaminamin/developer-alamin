import React from 'react'
import { blogs } from '../../../data'
import SingleBlog from '../../Blog/SingleBlog'

const Homeblog = () => {
  return (
    <section className="py-10 text-gray-200 font-JosefinSans">
      <div className="">
        <h2 className="section-title mb-6 text-white">My Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Homeblog