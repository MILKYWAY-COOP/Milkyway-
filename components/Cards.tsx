import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/data';
import { IoClose } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';

export default function Cards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col w-auto align-center justify-center p-8 bg-fadedDarkBlue rounded-[20px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedId(null);
      }}
    >
      {selectedId && (
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-darkBlue z-20 rounded-[20px]" />
      )}

      <h1 className="text-2xl font-[500] mb-4 text-center font-comfota text-white">
        We work with a variety of technologies, including but not limited to:
      </h1>
      <div className="relative w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            layoutId={index.toString()}
            onClick={() => {
              selectedId === null
                ? setSelectedId(index.toString())
                : setSelectedId(null);
            }}
            className="bg-white rounded-lg p-4 md:w-[350px] sm:h-[250px] overflow-hidden relative cursor-pointer"
          >
            <motion.h2 className="font-bold text-lg mb-2">
              {category.name}
            </motion.h2>
            <motion.ul>
              {category.technologies.map((tech, techIndex) => (
                <motion.li key={techIndex}>
                  <TiTick className="inline-block mr-2" fill="green" />
                  <motion.span>{tech}</motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`bg-white rounded-lg p-4 absolute z-30 w-[350px]`}
              style={{
                top: '30%',
                left: '30%',
                transform: 'translate(-30%, -30%)',
              }}
            >
              <motion.div className="w-full flex justify-end">
                <motion.button
                  className="cursor-pointer w-[35px] h-[35px] rounded-3xl absolute flex justify-center align-center bg-fadedDarkBlue"
                  onClick={() => setSelectedId(null)}
                >
                  <IoClose fill="#fff" size={25} />
                </motion.button>
              </motion.div>

              <motion.ul>
                <motion.h2 className="font-bold text-lg mb-2">
                  {categories[parseInt(selectedId)].name}
                </motion.h2>
                {categories[parseInt(selectedId)].technologies.map(
                  (tech, techIndex) => (
                    <motion.li key={techIndex}>
                      <TiTick className="inline-block mr-2" fill="green" />
                      <motion.span>{tech}</motion.span>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span
        className={`w-full text-center pt-4  transition-all ${
          isHovered ? 'text-white' : 'text-grey'
        }`}
      >
        Tap to open card
      </span>
    </div>
  );
}
