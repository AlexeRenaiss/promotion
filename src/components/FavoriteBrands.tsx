import { Button } from "./ui/button";

const FavoriteBrands = () => {
  return (
    <main className="my-20  flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="relative">
          <h1 className="text-3xl font-bold text-black">MY FAVORITE BRANDS</h1>
          {/* Decorative stars */}
        </div>

        <div className="space-y-4 py-8">
          <h2 className="text-xl font-semibold text-black">
            You currently do not have any favorite brands selected
          </h2>
          <p className="text-black max-w-lg mx-auto leading-relaxed">
            Elevate your beauty experience and enjoy the perks of being part of
            an elite community that celebrates your passion for all things
            beautiful! Sign up today and let the pampering begin!
          </p>
        </div>

        <Button className="bg-primary hover:bg-primary text-white font-semibold px-20 py-4 w-72 rounded-full transition-all duration-300 hover:scale-105">
          SELECT BRANDS
        </Button>
      </div>
    </main>
  );
};

export default FavoriteBrands;
