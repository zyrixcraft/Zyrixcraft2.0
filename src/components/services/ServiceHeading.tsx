import { motion } from 'framer-motion';
import { FC } from 'react';

interface ServiceHeadingProps {
  title: string;
}

//  ServiceHeading
const ServiceHeading: FC<ServiceHeadingProps> = ({ title }) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const secondWord = words[1];

  return (
    <motion.div 
      className="flex items-center mb-16 gap-2 relative"
     
    >
      {/* Services Heading */}
      <div className="flex items-center ml-3">        
        <h1 className="text-5xl font-bold text-white mr-4">{firstWord}</h1>        
        <h1 className="text-5xl font-bold text-orange-500">{secondWord}</h1>
      </div>
      
      {/* Animated line */}
      <hr className="w-full sm:w-auto sm:flex-grow border-t border-orange-600 " />
    </motion.div>
  );
};

export default ServiceHeading; 