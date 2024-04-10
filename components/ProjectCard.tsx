'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({
  project,
  index,
  range,
  target,
  progress,
}: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const cardScale = useTransform(progress, range, [1, target]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [2, 1]);

  return (
    <motion.div
      className={`w-full h-[70vh] flex align-center justify-center sticky`}
      ref={ref}
      style={{
        top: `calc(15% + ${index * 25}px)`,
      }}
    >
      <motion.div
        className={`w-full h-[575px] rounded-[24px] gap-[66px] p-[70px] 
        }]`}
        style={{
          scale: cardScale,
          backgroundColor: project.accent,
          display: 'flex',
          flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
        }}
      >
        <div className="w-[50%] flex flex-col">
          <h3 className="text-white text-[24px] font-comfota mb-[24px]">
            {project.title}
          </h3>
          <p className="text-greyB font-comfota">{project.description}</p>
          <div className="flex flex-wrap mt-[40px] gap-[12px]">
            {project.tags.map((tag: any, index: number) => (
              <span
                key={index}
                className={`bg-grey text-black p-[12px] font-comfota rounded-[20px]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-[50%] h-[435px] overflow-hidden rounded-[32px] relative">
          <motion.div
            className={`w-[100%] h-[100%]`}
            style={{
              scale,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
