// import React from "react";
import { motion } from "framer-motion";

function HeroSectionStripTwo() {
  return (
    <div className="absolute  top-[30px] right-16 w-[600px]  h-[600px] z-0">
      <div className="relative -z-10 top-[215px] right-[2
      
      0px]  w-[800px] h-10 bg-white text-black rotate-45 overflow-x-hidden flex items-center">
        <motion.div
          className=" gap-5 whitespace-nowrap flex justify-center items-center  "
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <span>WEB DEVELOPMENT</span>
          <span className=" text-orange-600 text-2xl ">•</span>
          <span>GRAPHICS</span>
          <span className="text-2xl text-orange-600">•</span>
          <span>ANIMATION</span>
          <span className="text-2xl text-orange-600">•</span>
          <span>UI-UX</span>
          <span className="text-2xl text-orange-600">•</span>
          <span>MOTION</span>
          <span className="text-2xl text-orange-600">•</span>
          <span>FIGMA</span>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSectionStripTwo;
