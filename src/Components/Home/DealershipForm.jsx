const DealershipForm = () => {
  return (
    <div className="flex items-center justify-center my-10 min-h-[70vh] md:min-h-[60vh] bg-black text-white">
      <div className="flex flex-col md:flex-row items-center w-full ">
        {/* Left Image Section */}
        <div className="flex-1 flex items-center justify-center bg-gray-800 p-8">
          <img
            src="/src/Components/Home/Images/scooter1.png" // Replace with actual path to the scooter image
            alt="Scooter"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-black p-8">
          <h2 className="text-lg font-bold text-green-600 mb-4">Apply for Dealership</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MOBILE PHONE NUMBER"
                className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="DEALERSHIP"
              className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="YOUR CURRENT LOCATION"
              className="w-full bg-black border border-green-600 text-white px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-2 mt-4 hover:bg-green-600"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DealershipForm;
