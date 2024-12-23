// Sample vehicle data (you can replace this with actual data)
const vehicles = [
  { name: "TOX KING", image: "/src/Components/Home/Images/scooter.jpg" },
  { name: "KN 3000", image: "/src/Components/Home/Images/scooter.jpg" },
  { name: "RHINO", image: "/src/Components/Home/Images/scooter.jpg" },
  { name: "RHINO +", image: "/src/Components/Home/Images/scooter.jpg" },
  { name: "E-TOX", image: "/src/Components/Home/Images/scooter.jpg" },
  { name: "318", image: "/src/Components/Home/Images/scooter.jpg" },
];

const VehicleGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center text-center border border-gray-200"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-contain mb-4 hover:scale-125 transition duration-200"
            />
            <div className="relative w-full">
              <div className="absolute top-0 right-0 clip-polygon-custom  px-4 py-1 bg-red-600 text-white text-xs font-semibold">
                {vehicle.name}
              </div>
            </div>
            <button className="mt-8 bg-[#f6f6f6] text-red-600  py-2 px-4 rounded-md hover:scale-125 transition duration-200">
              Explore Your Vehicle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleGrid;
