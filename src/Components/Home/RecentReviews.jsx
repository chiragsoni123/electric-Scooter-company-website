const RecentReviews = () => {
  const reviews = [
    {
      text: "I've been using my Toxmo electric scooter for the past six months, and it's been an absolute game-changer. The battery life is impressive, and it's perfect for my daily commute.",
      name: "Ramesh Kumar",
      location: "Delhi",
      imgSrc: "https://storage.googleapis.com/a1aa/image/MhOqtXUF8NKtLtNTs0WGepcqpbXB5qHZqolYQqVjpnl6Mt1JA.jpg",
    },
    {
      text: "Toxmo electric scooters are the future! I bought one for myself and another for my wife, and we both love it. The scooter charges quickly, and the range is excellent.",
      name: "Anjali",
      location: "Punjab",
      imgSrc: "https://storage.googleapis.com/a1aa/image/RNw0bjPGFAJ0CN9N0ghpZM049nahf1zIiOM6JDN4X4R8Mt1JA.jpg",
    },
    {
      text: "I am thoroughly impressed with my Toxmo electric scooter. It's lightweight, easy to handle, and very efficient. The scooter's acceleration is smooth, and it can easily tackle the city roads.",
      name: "Sujoy",
      location: "Kolkata",
      imgSrc: "https://storage.googleapis.com/a1aa/image/vz38ZDTwceS4RSphCDmoN0SwgJYbrzz0tijHIb4IAQE7Mt1JA.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-block text-xl sm:text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
            Recent Reviews
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="relative p-6 border-2 border-red-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-red-500 text-4xl md:text-6xl">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div className="flex items-center">
                <img
                  src={review.imgSrc}
                  alt={`Profile picture of ${review.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-gray-500 text-sm font-bold tracking-wider">
            <span className="inline-block w-16 border-t border-gray-300 align-middle"></span>
            <span className="px-3">FROM OUR BLOG</span>
            <span className="inline-block w-16 border-t border-gray-300 align-middle"></span>
          </div>
        </div>

        {/* EV Scooter Buying */}
        <div className="text-center mb-12">
          <div className="inline-block text-xl sm:text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
            EV Scooter Buying
          </div>
        </div>

        {/* Blog Details */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            Top 7 Electric Scooters in India | How to Choose an Electric Scooter in India | 2024's Best Electric Scooters for Every Budget in India
          </p>
          <p className="mt-2">April 22, 2024 - No Comments</p>
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;
