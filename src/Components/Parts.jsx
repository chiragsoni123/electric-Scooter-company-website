import React, { useState } from 'react';
import { battery, motor, controller, tire, brake} from '../assets';

const parts = [
  {
    name: 'Battery',
    image: battery,
    description: 'High-performance battery ensuring long-lasting rides.',
    details: 'Our batteries are designed to provide maximum efficiency and longevity, ensuring you get the most out of every charge. With advanced safety features and robust construction, they are built to withstand the demands of daily use.',
  },
  {
    name: 'Motor',
    image: motor,
    description: 'Efficient motor providing smooth acceleration.',
    details: 'Our motors are engineered for optimal performance, delivering smooth and powerful acceleration. They are built with high-quality materials to ensure durability and reliability, making your rides more enjoyable and hassle-free.',
  },
  {
    name: 'Controller',
    image: controller,
    description: 'Advanced controller for precise power management.',
    details: 'The controller is the brain of your electric scooter, managing power distribution and ensuring a smooth ride. Our controllers are designed for precision and efficiency, providing you with the best riding experience possible.',
  },
  {
    name: 'Brake',
    image: brake,
    description: 'Durable brakes for safe and reliable stopping power.',
    details: 'Safety is our top priority, and our brakes are designed to provide reliable stopping power in all conditions. Made from high-quality materials, they ensure your scooter stops quickly and safely every time.',
  },
  {
    name: 'Tire',
    image: tire,
    description: 'All-terrain tires for a comfortable and secure ride.',
    details: 'Our tires are built to handle a variety of terrains, providing you with a smooth and comfortable ride. With excellent grip and durability, they ensure your scooter performs well on both city streets and rougher paths.',
  },
];

function Parts() {
  const [showDetails, setShowDetails] = useState(Array(parts.length).fill(false));

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Electric Scooter Parts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {parts.map((part, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {part.name}
              </h3>
              <p className="text-gray-600 mb-3">{part.description}</p>
              {showDetails[index] && <p className="text-gray-600">{part.details}</p>}
              <button
                onClick={() => toggleDetails(index)}
                className="mt-5 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                {showDetails[index] ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parts;