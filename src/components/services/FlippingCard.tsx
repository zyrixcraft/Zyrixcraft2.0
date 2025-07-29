import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import './FlippingCardStyles.css';

interface FlippingCardProps {
  title: string;
  description: string;
  images: string[];
  link: string;
  index: number;
}

const FlippingCard: FC<FlippingCardProps> = ({ 
  title, 
  description, 
  images, 
  link,
  index 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    if (!isFlipped) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isFlipped, images.length]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <motion.div
      className="flipping-card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
    >
      <div 
        className={`flipping-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front Side */}
        <div className="flipping-card-front">
          <div className="card-image-container">
            {images.map((image, i) => (
              <div 
                key={i}
                className={`card-image ${currentImageIndex === i ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="card-overlay" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="flip-indicator">
              <span>Click to learn more</span>
              <svg className="flip-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flipping-card-back">
          <div className="back-content">
            <h3 className="back-title">{title}</h3>
            <p className="back-description">{description}</p>
            <button 
              className="back-link-button"
              onClick={handleLinkClick}
            >
              View Projects
              <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <div className="back-flip-indicator">
              <span>Click to go back</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlippingCard;