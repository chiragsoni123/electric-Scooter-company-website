import Dealership from "./Home/Dealership";
import DealershipForm from "./Home/DealershipForm";
import FeatureGrid from "./Home/FeatureGrid";
import OurPlant from "./Home/OurPlant";
import RecentReviews from "./Home/RecentReviews";
import Select from "./Home/Select";
import VehicleGrid from "./Home/VehicleGrid";
import WhyWe from "./Home/WhyWe";

function Home() {
  return (
    <div>
      <a
        href="/"
        className="flex w-full mb-4 h-20 items-center justify-center bg-[#16611d] text-xl text-white md:hidden font-semibold text-center"
      >
        CONTACT FOR DEALERSHIP
      </a>
      <div className="w-full h-[50vh] md:h-screen bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/0b/DiwaliKarnal.JPG')] bg-center bg-cover bg-no-repeat">
        {/* Add any additional content here if needed */}
      </div>

      <div className="px-4 md:px-8 lg:px-16">
        <Select />
        <Dealership />
        <VehicleGrid />
        <FeatureGrid />
        <WhyWe />
        <DealershipForm />
        <OurPlant />
      </div>

      {/* YouTube video iframe for looping video */}
      <div className="relative w-full h-[35vh] md:h-[calc(100vh-100px)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full transform scale-150 sm:scale-200">
          <iframe
            src="https://www.youtube.com/embed/xR-u3LMTvIM?autoplay=1&mute=1&loop=1&playlist=xR-u3LMTvIM&controls=0&showinfo=0&modestbranding=1&fs=0&iv_load_policy=3"
            title="YouTube video"
            allow="autoplay"
            className="w-full h-full border-0"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      <RecentReviews />
    </div>
  );
}

export default Home;