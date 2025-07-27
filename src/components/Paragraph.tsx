import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Word from './Word'
import styles from './style.module.scss';

export default function Paragraph({ text }: { text: string }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
