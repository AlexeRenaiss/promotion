export default function EarningSection() {
  return (
    <div className="flex flex-col items-center text-center py-10 my-8 md:my-16 px-4 sm:px-6">
      <h2 className="text-2xl font-bold text-black mb-6">Start Earning</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Complete Your Profile */}
        <div>
          <div className="flex-1 border border-blue-500 rounded-md p-3 bg-blue-50 hover:bg-blue-100 transition shadow-md">
            <h3 className="text-lg font-bold text-blue-600 flex items-center justify-center">
              Complete Your Profile <span className="ml-8">&gt;</span>
            </h3>
          </div>
          <p className="text-black mt-4">
            Earn 25 points + 1 sweepstakes entry when you complete your profile
          </p>
        </div>

        {/* Take a Quiz */}
        <div>
          <div className="flex-1 border border-primary rounded-md p-3 bg-pink-50 hover:bg-pink-100 transition shadow-md">
            <h3 className="text-lg font-bold text-primary flex items-center justify-center">
              Take a Quiz <span className="ml-8">&gt;</span>
            </h3>
          </div>
          <p className="text-black mt-4">
            Earn 25 points for each additional quiz you take + learn more about
            your style!
          </p>
        </div>

        {/* Refer a Friend */}
        <div>
          <div className="flex-1 border border-orange-300 rounded-md p-3 bg-orange-50 hover:bg-orange-100 transition shadow-md">
            <h3 className="text-lg font-bold text-orange-600 flex items-center justify-center">
              Refer a Friend <span className="ml-8">&gt;</span>
            </h3>
          </div>
          <p className="text-black mt-4">
            Earn 25 points for each friend who signs up for the Loyalty Program!
          </p>
        </div>
      </div>
    </div>
  );
}
