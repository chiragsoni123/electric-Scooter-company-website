const Dealership = () => {
  return (
    <div className="min-h-[80vh] md:min-h-[70vh]  w-full bg-black flex flex-col items-center justify-start pt-10 text-white relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 lg:px-32">
        
        {/* Dealership Enquiry Card */}
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-500 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Dealership Enquiry</h2>
          <p className="text-gray-300 mb-6">
            Interested in joining our network? Click below to explore dealership
            opportunities and partner with us.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-200">
            Call Now: +91 8568888990
          </button>
        </div>
        
        {/* Service & Support Card */}
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-500 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Service & Support</h2>
          <p className="text-gray-300 mb-6">
            Need assistance with our products? Click below for service, support,
            and troubleshooting information.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-200">
            Call Now: +91 9253071623
          </button>
        </div>
      </div>
      
      {/* Bike Images Section */}
      <div className=" flex justify-end  items-end w-full ">
        <img
          src="/src/Components/Home/Images/scooters.png" // Replace with your actual image path
          alt="Toxmo EV Bikes"
          className="max-w-2xl mx-auto mb-4 overflow-hidden  object-cover"
        />
      </div>
    </div>
  );
};

export default Dealership;
