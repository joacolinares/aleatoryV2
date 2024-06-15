const TweetPurchase = ({ bought, setBought }) => {
  return (
    <div
      className={`${
        bought ? "block" : "hidden"
      } bg-black absolute bg-opacity-80 top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      <div className="w-full max-w-[500px] bg-black bg-opacity-70 border border-[#D101D5] flex flex-col items-center gap-[25px] px-4 py-3 text-center">
        <p className="text-2xl">Congratulations!!!</p>
        <p className="text-xl">
          You are ALEA team! Let&apos;s tweet and support
        </p>

        <button
          onClick={() => {
            setBought(false);
          }}
          className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300 font-semibold"
        >
          Tweet!
        </button>
      </div>
    </div>
  );
};

export default TweetPurchase;
