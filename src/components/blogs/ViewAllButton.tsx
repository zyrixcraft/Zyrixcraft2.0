import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ViewAllButtonProps {
  link: string;
  text?: string;
}

const ViewAllButton: FC<ViewAllButtonProps> = ({ 
  link, 
  text = "ALL BLOGS" 
}) => {
  return (
    <motion.div 
      className="flex justify-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <a href={link} className="view-all-blogs">
        {text}
        <FaArrowRight size={16} />
      </a>
    </motion.div>
  );
};

export default ViewAllButton; 