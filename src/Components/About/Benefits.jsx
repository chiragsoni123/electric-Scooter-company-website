import React from 'react';

const Benefits = () => {
  const benefits = [
    "Booster for Economy as EV is a growing sector",
    "Low running cost of EV vehicles supports Indian families",
    "Clean and green India movement support",
    "Employment-generating sector",
    "Make in India project development (Vocal for local)",
    "Renewable energy empowerment movement like solar energy and lithium batteries",
    "Tax and financial benefits like road tax and registration",
    "Deliveries and supply of essential items under control with EV vehicles",
    "Zero air and noise pollution. No hazardous material wastage for causing river pollution",
    "Minimum infrastructure cost to develop battery management systems in the EV segment",
    "India becomes more self-reliant, reducing dependency on crude oil imports",
  ];

  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">EV Benefits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start mb-2">
            <i className="fas fa-check text-green-800 mr-2"></i>
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
