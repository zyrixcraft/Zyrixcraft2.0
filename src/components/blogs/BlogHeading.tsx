import { motion } from 'framer-motion';
import { FC } from 'react';

interface BlogHeadingProps {
  title: string;
}

const BlogHeading: FC<BlogHeadingProps> = ({ title }) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const secondWord = words.slice(1).join(' ');

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start md:items-center mb-16 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Blog Heading */}
      <div className="flex gap-2  md:flex-row items-start md:items-center mb-4 md:mb-0  ">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mr-0 md:mr-4 mb-2 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {firstWord}
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {secondWord}
        </motion.h1>
        {/* Animated line */}
        <motion.div
          className="flex-grow ml-0 md:ml-6 relative heading-line w-full"
          style={{ maxWidth: '800px' }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Horizontal line */}
          <svg width="100%" height="2" viewBox="0 0 800 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H800" stroke="#FF6B00" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default BlogHeading; 