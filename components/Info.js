"use client";
import Image from "next/image";
import i1 from "@/public/i1.png";
import i2 from "@/public/i2.png";
import i3 from "@/public/i3.png";
import { motion } from "framer-motion";

const titleVariants = {
  offscreen: {
    x: -2000,
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

const cardVariants = {
  offscreen: {
    x: +2000,
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

const items = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 3,
    },
  },
};

const Info = () => {
  return (
    <section
      id="introduction"
      className="w-full flex flex-col items-center justify-center scroll-mt-[120px]"
    >
      <div className="flex flex-col w-full relative paddings pb-12 min-h-screen">
        <motion.div className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text-white text-4xl sm:text-5xl max-md:text-center "
          >
            <motion.h1
              variants={titleVariants}
              className="text-white text-4xl sm:text-5xl max-md:text-center "
            >
              A LITTLE INTRODUCTION<br></br> ABOUT US
            </motion.h1>
          </motion.div>
          <div className="flex flex-wrap justify-evenly items-center gap-12">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-col gap-[20px] items-center sm:items-start"
            >
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={items}
                className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8"
              >
                <div className="bg-black bg-opacity-80 rounded-full">
                  <Image src={i1} alt="Icon" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">$100B</p>
                  <p className="text-xl">Traditional financial instrument</p>
                </div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={items}
                className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8"
              >
                <div className="bg-black bg-opacity-80 rounded-full">
                  <Image src={i2} alt="Icon" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">21M +</p>
                  <p className="text-xl">Trusted Owners</p>
                </div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={items}
                className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8"
              >
                <div className="bg-black bg-opacity-80 rounded-full">
                  <Image src={i3} alt="Icon" className="color" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">1st</p>
                  <p className="text-xl">
                    DEFI platform to create a lottery bonds
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                variants={cardVariants}
                className=" text-white bg-white bg-opacity-10 p-3 max-w-[500px] md:text-xl max-md:text-center overflow-hidden"
              >
                <p>
                  Aleatory finance has been designed to decentralize one of the
                  oldest and most popular financial instruments:<br></br>
                  <span className="text-[#65BEDA]">Lottery Bonds</span>
                  <br></br>
                  (otherwise known as Premium Bonds).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0" />
          {/* <div className="tech1 absolute w-full h-full"></div>
          <div className="tech2 absolute w-full h-full"></div> */}
          <div className="w-screen h-[200px] bg-gradient-to-b from-[#0e0d10] from-20% to-transparent to-[100%] absolute -top-[10px]" />
          <div className="w-screen h-[200px] bg-gradient-to-b from-transparent from-0% to-[#0e0d10] to-[70%] absolute bottom-0" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="h-full w-full object-cover tech1 tech2"
          >
            <source src="/backgrounds/info-dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Info;
