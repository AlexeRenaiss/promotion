export default function RewardsHeroSectionMobile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[45vh] bg-primary p-4 mt-16 font-medium">
      <h1 className="text-white  text-lg mb-6">Hello, John</h1>
      <div className="bg-white   rounded-full shadow-lg border-4 border-[#FFCDBD] w-48 h-48 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-[#171D52]">75</span>
        <span className="text-[#171D52] text-sm pt-1 text-center">
          Available <br /> balance
        </span>
      </div>
    </div>
  );
}
