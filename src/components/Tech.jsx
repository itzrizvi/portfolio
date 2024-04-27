import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useWindowSize } from "../utils/useWindowSize";

const Tech = () => {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          Which I have worked with so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-24 h-24" key={technology.name}>
            {!isMobile ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <div className="bg-slate-200 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={technology?.icon}
                  alt="source code"
                  className="w-2/2 h-2/2 p-4 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
