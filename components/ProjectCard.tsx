'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '@/context/index';

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

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { screen } = context;

  return (
    <motion.div
      className={`w-full flex align-center justify-center sticky mb-[20px]`}
      ref={ref}
      style={{
        top: `calc(15% + ${index * 25}px)`,
      }}
    >
      <motion.div
        className={`w-full xl:h-[575px] rounded-[16px] md:rounded-[24px] xl:gap-[40px] ${
          screen === 'xl' || screen === '2xl' ? 'p-[40px]' : ''
        }
        }]`}
        style={{
          scale: cardScale,
          backgroundColor: project.accent,
          display: 'flex',
          flexDirection:
            screen === `sm` || screen === `md` || screen === `lg`
              ? 'column-reverse'
              : index % 2 === 0
              ? `row-reverse`
              : `row`,
          overflow: 'hidden',
        }}
      >
        <div
          className="flex flex-col p-[20px]"
          style={{
            width:
              screen === `sm` || screen === `md` || screen === `lg`
                ? `100%`
                : `50%`,
          }}
        >
          <h3 className="text-white text-[20px] xl:text-[24px] font-comfota mb-[24px]">
            {project.title}
          </h3>
          <p className="text-greyB font-comfota md:text-[18px] text-[14px]">
            {project.description}
          </p>
          <div className="flex flex-wrap mt-[40px] gap-[12px]">
            {project.tags.map((tag: any, index: number) => (
              <span
                key={index}
                className={`bg-grey text-black p-[12px] font-comfota rounded-[20px] text-[14px]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`xl:h-[435px] overflow-hidden relative ${
            screen === 'sm' || screen === 'md' || screen === 'lg'
              ? ''
              : 'rounded-[20px]'
          }`}
          style={{
            width:
              screen === `sm` || screen === `md` || screen === `lg`
                ? `100%`
                : `50%`,
          }}
        >
          <motion.div
            className={`w-[100%] h-[100%] `}
            style={{
              scale,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover h-[300px] lg:h-[435px] w-[100%]"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
