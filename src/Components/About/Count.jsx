import React, { useEffect, useState } from "react";

const Count = () => {
  const [scooters, setScooters] = useState(0);
  const [dealers, setDealers] = useState(0);
  const [cities, setCities] = useState(0);

  // Animation function for counting up to the target number
  const animateCount = (setCount, target) => {
    let current = 0;
    const increment = target / 100; // Adjust speed
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20); // Update every 20ms
  };

  useEffect(() => {
    animateCount(setScooters, 500000);
    animateCount(setDealers, 500);
    animateCount(setCities, 25);
  }, []);

  return (
    <div className="bg-black text-white text-center px-3 md:px-10 py-20">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">SERVICE EXPERIENCE</h1>
      <div className="flex flex-col md:flex-row justify-center mt-10 space-y-5 md:space-y-0 md:space-x-5">
        <div className="bg-green-800 text-white py-8 px-5 md:py-10 md:px-8 w-full md:w-1/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{scooters.toLocaleString()}</h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base">SCOOTERS ON ROAD</p>
        </div>
        <div className="bg-green-800 text-white py-8 px-5 md:py-10 md:px-8 w-full md:w-1/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{dealers}+</h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base">DEALERSHIP & SUB DEALERS</p>
        </div>
        <div className="bg-green-800 text-white py-8 px-5 md:py-10 md:px-8 w-full md:w-1/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{cities}+</h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base">CITIES SERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
