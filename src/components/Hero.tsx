import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#f7e5cc]">
      {/* Left: Image */}
      <div className="md:w-1/2 relative h-[400px] md:h-[540px]">
        <Image
          src="/images/banner.png"
          alt="Beauty Code Loyalty Program"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Join the Exclusive Beauty Code Loyalty Program!
        </h1>
        <p className="mt-4 text-gray-700">
          Elevate your beauty experience and enjoy the perks of being part of an
          elite community that celebrates your passion for all things beautiful!
          Sign up today and let the pampering begin!
        </p>

        <button
          type="submit"
          className="mt-6 w-full max-w-sm py-3 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
        >
          JOIN NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
