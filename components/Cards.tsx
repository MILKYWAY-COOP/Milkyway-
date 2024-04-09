import { useState } from 'react';
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

  return (
    <div
      className="flex flex-col w-full align-center justify-center rounded-[20px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedId(null);
      }}
    >
      <div className="flex flex-col justify-center align-center gap-[24px]">
        <h1 className="text-white text-[44px] text-center">Tech Stack</h1>
        <h2 className="text-[16px] mb-4 text-center font-comfota text-grey">
          We work with a variety of technologies, including but not limited to:
        </h2>
      </div>
      <div className="relative w-full flex flex-wrap gap-[32px] align-center justify-center grid-custom">
        {categories.map((category, index) => (
          <FadeInWhenVisible key={index}>
            <motion.div
              layoutId={index.toString()}
              className="w-[476px] h-[492px] rounded-[28px] border-[2px] border-contrast2 px-[40px] py-[32px] overflow-hidden relative flex flex-col gap-[28px]"
            >
              <motion.div className="flex align-center gap-[16px]">
                <category.icon width={48} height={48} />
                <motion.h2 className="text-white text-[24px] font-comfota">
                  {category.name}
                </motion.h2>
              </motion.div>
              <motion.ul className="flex flex-col gap-[16px]">
                {category.technologies.slice(0, 8).map((tech, techIndex) => (
                  <motion.li key={techIndex}>
                    <TiTick className="inline-block mr-2" fill="#FFCC00" />
                    <motion.span className="text-greyB text-[20px] font-comfota">
                      {tech}
                    </motion.span>
                  </motion.li>
                ))}
                {category.technologies.length > 9 && (
                  <motion.li>
                    <motion.button
                      className="bg-contrast1 w-auto p-1 rounded absolute bottom-0 right-0 text-comfota cursor-pointer"
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
              className={`absolute z-30 min-w-[400px] bg-stars overflow-hidden`}
              style={{
                top: '20%',
                left: '40%',
                transform: 'translate(-20%, -40%)',
              }}
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

                <motion.ul className="flex flex-col gap-[16px]" initial="hidden" animate="visible">
                  <motion.div className="flex align-center gap-[16px]">
                    <IconComponent width={48} height={48} fill="#fff" />
                    <motion.h2 className="text-white text-[24px]">
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
                        <motion.span className="text-white text-[20px]">
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
