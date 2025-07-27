import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TypewriterTextProps {
  text: string;
}

// Animated text in the end
const TypewriterText: FC<TypewriterTextProps> = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variantion
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.03 }
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full text-center typewriter-container"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <motion.h3 
        className="typewriter-text"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            variants={child}
            className={char === " " ? "inline-block w-4" : "inline-block"}
          >
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </motion.div>
  );
};

export default TypewriterText; 