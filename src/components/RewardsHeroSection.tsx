export default function RewardsHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] bg-primary text-white mt-14">
      <h2 className="text-lg md:text-xl font-medium mt-14 mb-4">Rewards</h2>

      {/* Light Background to Keep the Bottom Cut Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100"></div>

      {/* Full-Width Card with Consistent Spacing Across Devices */}
      <div
        className="relative mt-6 bg-white shadow-lg rounded-lg p-6 md:p-8 
                 justify-center flex flex-col items-center 
                 w-11/12 sm:w-4/5 sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 
                 min-h-[300px] md:min-h-[320px]"
      >
        {/* Background Image - Improved implementation for tablet */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: "url('/images/hero.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Content with consistent sizing across devices */}
        <div className="relative z-10 text-center pt-4">
          <p className="text-2xl md:text-3xl font-medium text-black">25</p>
          <p className="text-gray-600 text-lg md:text-xl font-medium pt-2">
            Available Balance
          </p>
        </div>
      </div>
    </section>
  );
}
