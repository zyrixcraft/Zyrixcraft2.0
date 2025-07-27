import { motion } from 'framer-motion';
// import {
//   BlogContainer,
//   BlogHeading,
// } from '../components';
import BlogContainer from '../components/blogs/BlogContainer';
import BlogHeading from '../components/blogs/BlogHeading';
// Blog data
const blogData = [
  {
    title: "Daily skincare routine tips",
    description: "Expert advice for daily skincare routines to maintain healthy, glowing skin throughout the year.",
    imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "February 22, 2024",
    author: "Ethan Brooks",
  },
  {
    title: "Achieving skin radiance naturally",
    description: "Natural methods to achieve a radiant complexion without harsh chemicals.",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "March 27, 2024",
    author: "Lily Thompson",
  },
  {
    title: "Natural ingredients for skincare",
    description: "Explore the benefits of natural ingredients in your skincare products.",
    imageUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "April 30, 2024",
    author: "Oliver Davis",
  }
];

// Blog page
const Blog = () => {
  return (
    <BlogContainer>
      {/* Heading */}
      <div className="mb-20">
        <BlogHeading title="OUR BLOGS" />
      </div>
      
      {/* Blog grid - now with horizontal layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {blogData.map((blog, index) => (
          <motion.div 
            key={index}
            className="bg-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              duration: 0.6,
              delay: index * 0.1
            }}
          >
            {/* Image */}
            <div className="w-full mb-4 overflow-hidden">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            
            {/* Date and author */}
            <div className="text-gray-400 text-sm mb-2">
              {blog.date} • {blog.author}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-4">{blog.description}</p>
            
            {/* Read more button */}
            <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-400 transition-colors">
              Read more
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
      
      {/* View more articles button */}
      <div className="flex justify-center">
        <motion.button 
          className="border-2 border-orange-500 text-white py-3 px-6 flex items-center hover:bg-orange-500 hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View more articles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </BlogContainer>
  );
};

export default Blog;