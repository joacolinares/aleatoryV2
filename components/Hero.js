const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="max-w-maxSectionWidth flex flex-col w-full relative paddings">
        <div className="mt-[250px] md:mt-[300px] flex flex-col gap-[20px] md:ml-[50px]">
          <h1 className="text-white text-4xl sm:text-5xl max-md:text-center md:text-6xl">
            A<span className="text-[#D101D5]">·</span>LE
            <span className="text-[#D101D5]">·</span>A
            <span className="text-[#D101D5]">·</span>TO
            <span className="text-[#D101D5]">·</span>RY
          </h1>
          <p className="text-[#D101D5] max-md:text-center sm:text-xl md:text-2xl">
            adjective- ,'depending on the throw<br></br> of a dice or on chance;
            random'.
          </p>
        </div>
        <div className="w-full absolute left-0 top-0 z-[-1] h-screen flex justify-center">
          <div className="absolute w-full h-full bg-black bg-opacity-40 md:hidden"></div>
          <div className="hidden md:block absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black from-10% to-transparent to-50% z-20"></div>
          <div className="hidden md:block absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent from-90% to-black to-100% z-20"></div>
          <div className="bg-black bg-opacity-50 absolute w-full h-full"></div>

          {/* <div className="absolute left-0 top-0 w-full h-full bg-[#D101D5] bg-opacity-[0.06] z-10"></div> */}
          <video loop muted className="h-screen object-cover">
            <source src="/backgrounds/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
