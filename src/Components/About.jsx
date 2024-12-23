import Count from "./About/Count";
import Mission from "./About/Misson";
import WhyWe from "./Home/WhyWe";
import History from "./About/History";
import Benefits from "./About/Benefits";
import Bkgrid from "./About/Bkgrid";

const About = () => {
  return (
    <div>
      <h1 className="text-green-800 text-2xl text-center sm:text-3xl lg:text-4xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center bg-white shadow-lg px-4 py-6 sm:px-8 sm:py-8 rounded-lg w-full max-w-4xl">
          <div className="flex items-center mb-4 w-full">
            <div className="bg-green-800 text-white px-3 sm:px-4 py-2 rounded-l-lg w-full sm:w-auto">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">About Us</h2>
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            Toxmo Electric Motors has been a symbol of trust, commitment, and quality in India since operational. Toxmo has entered into the Electric Mobility space, offering solutions from Electric Vehicles and Electric Vehicle Batteries.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            Over the years, Toxmo Electric’s commitment towards the environment has been inspired, showing through its CSR programs including but not limited to Environmental Management System and conservation. Toxmo has ventured into the domain of providing affordable, sustainable, and clean mobility to the country via its range of Zero Emission Electric Two-Wheelers & Three-Wheelers.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            We work hard to provide a world-class product to our loyal customers. We are working towards a sustainable future for the generations. Our products are reliable, affordable, and daily-commute e-scooters that come with a host of benefits, making your ride a wonderful experience.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            Come, join hands with us in making this shift towards a greener India by ditching conventional, polluting vehicles and switching to Toxmo Electric Vehicles. Don’t worry, you’re in safe hands.
          </p>
          <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full mt-4 text-sm sm:text-base lg:text-lg">Get Started</button>
        </div>
        <div className="mt-28 h-[30vh] relative overflow-hidden self-start sm:h-[50vh] bg-green-600 w-full">
          <img 
            src="/src/Components/Home/Images/scooters.png" 
            alt="A lineup of various electric scooters from Toxmo Electric Motors" 
            className="w-full px-10 absolute bottom-0 rounded-md" 
          />
        </div>
      </div>

      <WhyWe />
      <Count />
      <Mission />
      <History />
      <Benefits />
      <Bkgrid />
    </div>
  );
};

export default About;