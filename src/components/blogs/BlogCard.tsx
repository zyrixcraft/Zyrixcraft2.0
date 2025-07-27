import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  link: string;
  isFeatured?: boolean;
  index: number;
}

const BlogCard: FC<BlogCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  date, 
  category,
  link, 
  index
}) => {
  // (intersection) scroll reveal animation
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`blog-card   scroll-reveal ${inView ? 'revealed' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* category badge */}
      <div className="blog-badge">{category}</div>
      
      {/* Full image background */}
      <div className="blog-card-full-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.5s ease',
          zIndex: 0
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="blog-card-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
          opacity: 0.85,
          transition: 'opacity 0.3s ease, background 0.3s ease'
        }}
      />
      
      {/* content */}
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        
        {/* Footer with date and link */}
        <div className="blog-card-footer">
          <div className="blog-card-date">
            <FaCalendarAlt size={14} />
            <span>{date}</span>
          </div>
          
          <a href={link} className="blog-card-link">
            Read More
            <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 