import * as React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '@/context/index';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  SiJavascript,
  SiFirebase,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiReact,
  SiStrapi,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si';
import { FaNode, FaVuejs, FaAws } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { distance } from '@popmotion/popcorn';
import NIcon from '@/assets/nextjs.svg';

// const size = 40;
const gap = 5;

const Square = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  Icon,
  gridWidth,
}: any) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { isNavOpen, screen } = context;

  if (isNavOpen) {
    return null;
  }
  const size = screen === 'sm' ? 40 : 60;

  const left =
    ((gridWidth - (rowIndex + 1)) * (size + gap)) / 2 + colIndex * (size + gap);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: left,
        position: 'absolute',
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        borderRadius: '5%',
      }}
    >
      {typeof Icon === 'function' ? (
        <Icon
          style={{
            fill: `#FFF`,
          }}
          size="60px"
        />
      ) : (
        <Image
          src={Icon}
          alt="Next.js Logo"
          style={{ width: '70px', height: '70px', fill: '#FFF' }}
        />
      )}
    </motion.div>
  );
};

export default function SpringIcons() {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const gridIcons = [
    [SiJavascript],
    [FaNode, SiTypescript],
    [SiPrisma, SiStrapi, SiReact],
    [NIcon, TbBrandReactNative, SiNestjs, FaVuejs],
    [SiPostgresql, SiMysql, SiMongodb, SiFirebase, FaAws],
    [SiGooglecloud, SiTailwindcss],
  ];

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { isNavOpen, screen } = context;

  if (isNavOpen) {
    return null;
  }
  const size = screen === 'sm' ? 40 : 60;

  const gridWidth = gridIcons[gridIcons.length - 1].length;

  return (
    <motion.div transition={{ duration: 10, loop: Infinity, ease: 'linear' }}>
      <motion.div
        animate={{ scale: 1.2 }}
        transition={{
          type: 'spring',
          damping: 2,
          stiffness: 50,
          restDelta: 0.001,
          duration: 10,
          loop: Infinity,
          ease: 'linear',
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: (size + gap) * 4 - gap,
          height: (size + gap) * 4 - gap,
          top: '30%',
          left: '20%',
          transform: 'translate(-30%, -30%)',
          perspective: 500,
        }}
      >
        {gridIcons.map((row, rowIndex) =>
          row.map((IconComponent, colIndex) => (
            <Square
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              key={rowIndex + colIndex}
              Icon={IconComponent || (() => null)}
              gridWidth={gridWidth}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
}
