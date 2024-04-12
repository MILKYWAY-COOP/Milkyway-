import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeInWhenVisible({ className, children }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;

export function FadeInRightWhenVisible({ className, children, delay }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className={className}
      transition={{ duration: 0.3, delay: delay }}
      variants={{
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeftWhenVisible({ className, children, delay }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className={className}
      transition={{ duration: 0.3, delay: delay }}
      variants={{
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
