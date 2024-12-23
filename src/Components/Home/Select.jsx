const vehicles = [
  { name: "TOX KING", src: "/src/Components/Home/Images/scooter.jpg" },
  { name: "RHINO", src: "/src/Components/Home/Images/scooter.jpg" },
  { name: "KN-3000 RHINO PLUS", src: "/src/Components/Home/Images/scooter.jpg" },
  { name: "318", src: "/src/Components/Home/Images/scooter.jpg" },
  { name: "E-TOX", src: "/src/Components/Home/Images/scooter.jpg" },
  // Add paths to your actual image files here
];

const Select = () => {
  return (
    <div className="p-8">
      <div className="flex justify-center mb-8">
        <h1 className="text-xl sm:text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
          SELECT YOUR TOXMO EV
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-md shadow-md"
          >
            <img
              src={vehicle.src}
              alt={vehicle.name}
              className="w-36 h-auto sm:w-46 md:w-60 lg:w-60 mb-4" // Adjusted image sizes for different screen sizes
            />
            <p className="text-lg font-semibold">{vehicle.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
