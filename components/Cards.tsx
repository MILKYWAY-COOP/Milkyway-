import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/data';
import { IoClose } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';
import FadeInWhenVisible from '@/utils/fadeInWhenVisible';
import { slideInFromLeft } from '@/utils/motion';

export default function Cards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const IconComponent = categories[parseInt(selectedId || '1')].icon;

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollY = () => {
    if (containerRef.current) {
      return containerRef.current.scrollTop;
    }
  };

  return (
    <div
      className="flex flex-col w-[100%] align-center justify-center rounded-[20px] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedId(null);
      }}
      id="Services"
    >
      <div className="w-[100%] flex flex-col justify-center align-center gap-[16px] md:gap-[24px] overflow-hidden">
        <FadeInWhenVisible>
          <h1 className="text-white md:text-[44px] text-[30px] text-center">
            Tech Stack
          </h1>
          <h2 className="text-[14px] md:text-[16px] mb-4 text-center font-comfota text-grey">
            We work with a variety of technologies, including but not limited
            to:
          </h2>
        </FadeInWhenVisible>
      </div>
      <div
        className="relative w-[100%] flex flex-wrap gap-[32px] align-center justify-center overflew-hidden"
        ref={containerRef}
      >
        {categories.map((category, index) => (
          <FadeInWhenVisible key={index}>
            <motion.div
              layoutId={index.toString()}
              className="w-[300px] h-[400px] md:w-[25vw] lg:w-[400px] xl:h-[492px] rounded-[28px] border-[2px] border-contrast2 p-[20px] md:px-[40px] md:py-[32px] overflow-hidden relative flex flex-col gap-[28px]"
            >
              <motion.div className="flex align-center gap-[16px]">
                <category.icon width={48} height={48} />
                <motion.h2 className="text-white text-[18px] xl:text-[24px] font-comfota">
                  {category.name}
                </motion.h2>
              </motion.div>
              <motion.ul className="flex flex-col gap-[12px] xl:gap-[16px]">
                {category.technologies.slice(0, 8).map((tech, techIndex) => (
                  <motion.li key={techIndex}>
                    <TiTick className="inline-block mr-2" fill="#FFCC00" />
                    <motion.span className="text-greyB text-[14px] xl:text-[20px] font-comfota">
                      {tech}
                    </motion.span>
                  </motion.li>
                ))}
                {category.technologies.length > 9 && (
                  <motion.li>
                    <motion.button
                      className="bg-contrast1 w-auto p-1 rounded absolute bottom-0 right-0 text-comfota cursor-pointer text-[14px] xl:text-[20px]"
                      onClick={() => {
                        selectedId === null
                          ? setSelectedId(index.toString())
                          : setSelectedId(null);
                      }}
                    >
                      Expand
                    </motion.button>
                  </motion.li>
                )}
              </motion.ul>
            </motion.div>
          </FadeInWhenVisible>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute z-30 md:min-w-[400px] bg-stars overflow-hidden t-${scrollY()} md:t-[20%] md:l-[40%] md:translate-x-[-20%] md:translate-y-[-40%]`}
              style={
                {
                  // top: '20%',
                  // left: '40%',
                  // transform: 'translate(-20%, -40%)',
                }
              }
            >
              <motion.div className="animate-bg inset-0 rounded-lg p-4">
                <motion.div className="w-full flex justify-end">
                  <motion.button
                    className="cursor-pointer w-[35px] h-[35px] rounded-3xl absolute flex justify-center align-center"
                    onClick={() => setSelectedId(null)}
                  >
                    <IoClose fill="#fff" size={25} />
                  </motion.button>
                </motion.div>

                <motion.ul
                  className="flex flex-col gap-[16px]"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="flex align-center gap-[16px]">
                    <IconComponent width={48} height={48} fill="#fff" />
                    <motion.h2 className="text-white text-[18px] lg:text-[24px]">
                      {categories[parseInt(selectedId)].name}
                    </motion.h2>
                  </motion.div>
                  {categories[parseInt(selectedId)].technologies.map(
                    (tech, techIndex) => (
                      <motion.li
                        key={techIndex}
                        variants={slideInFromLeft(0.15 * techIndex)}
                      >
                        <TiTick className="inline-block mr-2" fill="#FFCC00" />
                        <motion.span className="text-white text-[16px] lg:text-[20px] ">
                          {tech}
                        </motion.span>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
