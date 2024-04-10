import { projects } from '@/data/data';
import ProjectCard from './ProjectCard';
import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Projects() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="w-full flex flex-col align-center justify-center relative pt-[40px]"
      ref={ref}
    >
      <h1 className="text-white text-[44px] mb-[24px] font-comfota text-center sticky top-[100px] ">
        Work
      </h1>
      {projects.map((project, index) => {
        const target = 1 - (projects.length - index) * 0.05;
        return (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            range={[index * (1 / projects.length), 1]}
            target={target}
            progress={scrollYProgress}
          />
        );
      })}
    </motion.div>
  );
}