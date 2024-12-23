
import Gallery from "./Gallery";
const Scooter1 = () => {

const images = [
    {
      src: "https://storage.googleapis.com/a1aa/image/YOWXloYoqo4xBlbQJS58XQx4enF0kZ54c99LOFXTw8Dic01JA.jpg",
      alt: "Side view of a blue scooter",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/JJNRw90BFD42GhfCfhqOijpu7mrrzSEjjep4mZQo1fQPkjuOB.jpg",
      alt: "Front view of a blue scooter",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/3YkiFRdlGpJMBZUyNGWT1DiTKm5i1MKRaIGr4jMZPgrQO66E.jpg",
      alt: "Rear view of a blue scooter",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/WIlAm2Y4DaInC5AmvFfd0z7MfvEyRA9Ffere44eegAicjc01JA.jpg",
      alt: "Other side view of a blue scooter",
    },
  ];





  return (
    <div>
    <div className="bg-gradient-to-r from-gray-200 to-white min-h-screen flex justify-center items-center font-serif">
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-5     rounded-lg ">
        <div className="flex-shrink-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/iVf1EpIEr6VEOyYFlwT8u9X3wrzGslWdffIQFoi1t7LQTNXnA.jpg"
            alt="Blue electric scooter in front of a speedometer background"
            className="w-full md:w-96"
            width="600"
                      height="400"                      
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="text-5xl font-bold">KN</h1>
          <hr className="border-t-2 border-gray-300 my-4" />
          <h2 className="text-2xl text-green-700 font-bold">
            AVAILABLE IN RTO / NON-RTO
          </h2>
          <ul className="list-disc list-inside mt-4 lg:text-xl">
            <li>72V 28/30*/32*/36*/40/48*AH Lead /Lithium Batteries</li>
            <li>250W / 1500W BLDC Motor</li>
            <li>50* – 150km** per charge (Depending on Battery Capacity)</li>
            <li>Digital Speedo Meter</li>
            <li>Front & Rear- Disk Brake</li>
            <li>12 inches Tubeless Tyres Front and Rear</li>
            <li>Head-Light / Tail-Light / Parking Mode</li>
            <li>Reverse Driving</li>
            <li>3 Speed Mode</li>
            <li>Tubeless Tyre</li>
            <li>Anti Theft</li>
            <li>Remote Locking</li>
            <li>Loading Capacity – 160 KGs</li>
          </ul>
          <button className="mt-8 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Enquire Now
          </button>
        </div>
      </div>
      
      </div>
      <Gallery images={images} />
      </div>
  );
};

export default Scooter1;
