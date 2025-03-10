export default function RewardsHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] bg-primary text-white mt-14">
      <h2 className="text-lg md:text-xl font-medium mt-14 mb-4">Rewards</h2>

      {/* Light Background to Keep the Bottom Cut Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100"></div>

      {/* Full-Width Card with Padding & More Bottom White Space */}
      <div className="relative mt-6 bg-white shadow-lg rounded-lg p-6 md:p-10 justify-center flex flex-col items-center w-full max-w-6xl  mx-4 sm:mx-6 md:mx-8 lg:mx-10 px-4 sm:px-6 lg:px-10 min-h-[300px] md:min-h-[350px]">
        {/* Background Image - Fixed implementation */}
        <div
          className="absolute inset-0 z-0 opacity-50 mx-4"
          style={{
            backgroundImage: "url('/images/hero.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Content with higher z-index to ensure it's above the background */}
        <div className="relative z-10 text-center pt-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">
            25
          </p>
          <p className="text-gray-600 text-xl md:text-2xl font-medium pt-2">
            Available Balance
          </p>
        </div>
      </div>
    </section>
  );
}
