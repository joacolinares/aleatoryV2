import Image from "next/image";
import React from "react";
import i1 from "@/public/i1.png";
import i2 from "@/public/i2.png";
import i3 from "@/public/i3.png";

const Info = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full relative paddings pb-12 min-h-screen">
        <div className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]">
          <h1 className="text-white text-4xl sm:text-5xl max-md:text-center ">
            A LITTLE INTRODUCTION<br></br> ABOUT US
          </h1>
          <div className="flex flex-wrap justify-evenly items-center gap-12">
            <div className="flex flex-col gap-[20px] items-center sm:items-start">
              <div className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8">
                <div>
                  <Image src={i1} alt="Icon" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">$100B</p>
                  <p className="text-xl">Traditional financial instrument</p>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8">
                <div>
                  <Image src={i2} alt="Icon" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">21M +</p>
                  <p className="text-xl">Trusted Owners</p>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-8">
                <div>
                  <Image src={i3} alt="Icon" className="color" />
                </div>
                <div className="flex flex-col text-white max-sm:text-center">
                  <p className="text-5xl">1st</p>
                  <p className="text-xl">
                    DEFI platform to create a lottery bonds
                  </p>
                </div>
              </div>
            </div>
            <div className=" text-white bg-white bg-opacity-10 p-3 max-w-[500px] md:text-xl max-md:text-center">
              <p>
                Aleatory finance has been designed to decentralize one of the
                oldest and most popular financial instruments:<br></br>
                <span className="text-[#65BEDA]">Lottery Bonds</span>
                <br></br>
                (otherwise known as Premium Bonds).
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          <div className="tech1 absolute w-full h-full"></div>
          <div className="tech2 absolute w-full h-full"></div>

          <video loop muted className="h-full w-full object-cover">
            <source src="/backgrounds/info-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Info;
