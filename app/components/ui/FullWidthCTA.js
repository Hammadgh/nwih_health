'use client';

export default function FullWidthCTA() {
  return (
    <div className="mt-16 md:mt-20 w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-16 md:py-20">
      <div className="text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
          Ready to Start Your Recovery Journey?
        </h3>
        <p className="text-base md:text-lg mb-4 text-white opacity-90">
          Join thousands of customers who have found lasting recovery with NWIH
        </p>
        <div className="flex justify-center">
          <a 
            href="tel:253-200-0300" 
            className="bg-white text-[#0077C8] px-6 py-3 rounded-xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Recovery Now
          </a>
        </div>
      </div>
    </div>
  );
}