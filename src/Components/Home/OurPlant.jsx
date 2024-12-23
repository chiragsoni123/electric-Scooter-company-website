// Importing icons directly as SVG files. Ensure to have the icons in your project.
import plantIcon1 from './Images/purchase-order-24.png'; // Replace with the correct path
import plantIcon2 from './Images/car-4-24.png'; // Replace with the correct path

const OurPlant = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                    <img
                        src="https://toxmoscooters.com/wp-content/uploads/2024/08/engineer-manager-working-and-planning-with-enginee-2023-11-27-05-36-59-utc-1360x765.jpg"
                        alt="Two workers in safety gear discussing in a factory setting"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col space-y-6">
                    <div className="bg-green-700 text-white px-6 py-4 rounded-md text-center shadow-md">
                        <h2 className="text-2xl font-bold">Our Plant</h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
                            <img src={plantIcon1} alt="Plant 1 Icon" className="w-16 h-16" />
                            <h3 className="text-xl font-semibold">Plant 1</h3>
                            <p className="text-gray-700 text-center">5/20, Dharuhera, Rewari, Haryana, 123106</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
                            <img src={plantIcon2} alt="Plant 2 Icon" className="w-16 h-16" />
                            <h3 className="text-xl font-semibold">Plant 2</h3>
                            <p className="text-gray-700 text-center">Alangirpur, Khatawali Road, Rajpura, Dharuhera, Rewari, Haryana 123106</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPlant;