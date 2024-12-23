const features = [
  {
    title: "Tubeless Tyre",
    description: "Enhanced grip and durability",
    icon: "🌐", // replace with an actual icon if available
    imageSrc: "/src/Components/Home/Images/scooter1.png", // Replace with the actual image path
    bgColor: "bg-red-600",
  },
  {
    title: "Brake System",
    description: "Combi Brake System for Smooth, Safe Handling and Collision Prevention",
    icon: "🛑", // replace with an actual icon if available
    imageSrc: "/src/Components/Home/Images/scooter1.png", // Replace with the actual image path
    bgColor: "bg-teal-600",
  },
  {
    title: "Battery",
    description: "Enhanced battery management technology and fast charging mechanism",
    icon: "🔋", // replace with an actual icon if available
    imageSrc: "/src/Components/Home/Images/scooter1.png", // Replace with the actual image path
    bgColor: "bg-gray-800",
  },
  {
    title: "Hydraulic Suspension",
    description: "Advanced road force absorption for Smoother and Comfier Driving",
    icon: "🛠️", // replace with an actual icon if available
    imageSrc: "/src/Components/Home/Images/scooter1.png", // Replace with the actual image path
    bgColor: "bg-gray-500",
  },
  {
    title: "Mobile Charging",
    description: "USB Port",
    icon: "🔌", // replace with an actual icon if available
    imageSrc: "/src/Components/Home/Images/scooter1.png", // Replace with the actual image path
    bgColor: "bg-blue-800",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {features.map((feature, index) => (
        <div key={index} className={`${feature.bgColor} p-6 flex flex-col justify-between items-center text-white hover:scale-125 transition duration-200`}>
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-center mb-4">{feature.description}</p>
          <img src={feature.imageSrc} alt={feature.title} className="w-full h-[30vh] object-cover " />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
