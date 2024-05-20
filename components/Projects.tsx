import { projects } from '@/data/data';
import ProjectCard from './ProjectCard';
import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import FadeInWhenVisible from '@/utils/fadeInWhenVisible';

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
      className="w-full flex flex-col align-center justify-center relative "
      ref={ref}
    >
      <FadeInWhenVisible className="text-white md:text-[44px] text-[26px] mb-[24px] font-comfota text-center sticky top-[0px] pt-[20px]">
        <h1 className="sticky top-[0px]">Work</h1>
      </FadeInWhenVisible>
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
