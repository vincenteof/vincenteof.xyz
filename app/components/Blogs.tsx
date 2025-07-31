import React from 'react';
import { blogs } from '@/data/blogs';

const Blogs = () => {
  return (
    <section id="blogs" className="py-200">
      <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
      <div className="container mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-700">{blog.description}</p>
            <a href={blog.link} className="text-blue-500 hover:underline mt-2 inline-block">Read More</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/blogs" className="text-blue-500 hover:underline">View All Blogs</a>
      </div>
    </section>
  );
};

export default Blogs;
