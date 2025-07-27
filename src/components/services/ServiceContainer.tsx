import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ServiceContainerProps {
  children: ReactNode;
}

// ServiceContainer
const ServiceContainer: FC<ServiceContainerProps> = ({ children }) => {
  return (
    <motion.div 
      className="service-container min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-20 lg:px-40 py-10 sm:py-16 md:py-24 lg:py-32 relative"
     
    >
      {/* service content container */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default ServiceContainer; 