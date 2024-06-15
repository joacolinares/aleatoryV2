"use client";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    x: -5000,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full relative paddings">
        <div className="mt-[200px] md:mt-[300px] flex flex-col gap-[20px] md:ml-[50px]">
          <h1 className="text-white text-4xl sm:text-5xl max-md:text-center md:text-6xl">
            A<span className="text-[#D101D5]">·</span>LE
            <span className="text-[#D101D5]">·</span>A
            <span className="text-[#D101D5]">·</span>TO
            <span className="text-[#D101D5]">·</span>RY
          </h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text-[#D101D5] max-md:text-center sm:text-xl md:text-2xl"
          >
            <motion.p variants={cardVariants}>
              adjective- ,&apos;depending on the throw<br></br> of a dice or on
              chance; random&apos;.
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full absolute left-0 top-0 z-[-1] h-screen flex justify-center">
          <div className="w-full h-full bg-black bg-opacity-50 absolute top-0 left-0" />
          <div className="tech1 absolute w-full h-full"></div>
          <div className="tech2 absolute w-full h-full"></div>
          <div className="w-screen h-[200px] bg-gradient-to-b from-transparent from-0% to-[#0e0d10] to-[70%] absolute bottom-0" />
          {/* <div className="absolute left-0 top-0 w-full h-full bg-[#D101D5] bg-opacity-[0.06] z-10"></div> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="h-screen w-screen object-cover"
          >
            <source src="/backgrounds/hero-dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
