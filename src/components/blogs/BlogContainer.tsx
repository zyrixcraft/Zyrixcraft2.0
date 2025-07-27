import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface BlogContainerProps {
  children: ReactNode;
}

const BlogContainer: FC<BlogContainerProps> = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen w-full bg-black z-0 text-white px-4 sm:px-6 md:px-20 lg:px-40 py-10 sm:py-16 md:py-24 lg:py-32 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="blogs"
    >
      {/* content container */}
      <div className="max-w-7xl mx-auto ">
        {children}
      </div>
    </motion.div>
  );
};

export default BlogContainer; 