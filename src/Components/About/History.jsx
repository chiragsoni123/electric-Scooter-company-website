function History() {
  return (
    <div className="flex justify-center items-center px-2 md:px-10 h-full  py-20 bg-white font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://th.bing.com/th/id/OIP.CJpH9SQ9by2nnj0GEb67FQHaEI?w=284&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Close-up of a vehicle's headlight with blue LED lights and two insets showing different light details"
            className="w-full max-w-xs md:max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold px-10 text-green-800">Our history</h1>
        
          <p className="mt-4 text-lg px-10 text-gray-700">
            Toxmo Electric Motor is working hard for the clean & green
            India movement for existing as well as for future generations.
            Toxmo Electric Motors has ventured into the domain of
            providing affordable, sustainable, and clean mobility to Indian
            Families via its range of Zero Emission Electric Two-Wheelers
            & Three-Wheelers. You are most welcome to join hands with
            us for making a big revolutionary shift towards a greener
            India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
