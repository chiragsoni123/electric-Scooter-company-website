const Bkgrid = () => {
  return (
    <div className="flex justify-center items-center h-full py-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <div className="flex justify-center items-center">
          <img
            src="https://th.bing.com/th/id/OIP.IMLYYAOvrmbHO6oYZ63fLAHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Blue scooter on a platform with a speedometer background"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://toxmoscooters.com/wp-content/uploads/2024/02/KN-3000.jpg"
              alt="Blue scooter on a path with a blurred background"
              className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://toxmoscooters.com/wp-content/uploads/2024/02/Rock.jpg"
              alt="Black scooter with a blue background"
              className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://toxmoscooters.com/wp-content/uploads/2024/02/Rhino-1.jpg"
              alt="Silver and black scooter with a blurred background"
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://toxmoscooters.com/wp-content/uploads/2024/02/Webside.jpg"
              alt="Multiple scooters lined up with a green background"
              className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkgrid;
