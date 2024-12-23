const WhyWe = () => {
    return (
        <div className="flex flex-col items-center py-10 bg-gray-100">
            <div className="text-xl sm:text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
                <h1 className="text-xl font-bold">WHY CHOOSE US</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                        src="https://img.freepik.com/free-vector/technology-icon_23-2148518925.jpg" 
                        alt="Innovative Design & Technology" 
                        className="h-24 w-24 mx-auto mb-4" 
                    />
                    <h2 className="text-lg font-bold mb-2">Innovative Design & Technology</h2>
                    <p>At Toxmo, we combine cutting-edge technology with sleek, modern designs to bring you electric scooters that are both stylish and efficient.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                        src="https://img.freepik.com/free-vector/environmental-icon_23-2148518855.jpg" 
                        alt="Eco-Friendly & Sustainable" 
                        className="h-24 w-24 mx-auto mb-4" 
                    />
                    <h2 className="text-lg font-bold mb-2">Eco-Friendly & Sustainable</h2>
                    <p>Toxmo electric scooters produce zero emissions, reducing your carbon footprint while providing an eco-friendly alternative to traditional vehicles.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                        src="https://img.freepik.com/free-vector/affordability-icon_23-2148549008.jpg" 
                        alt="Affordable & Cost-Effective" 
                        className="h-24 w-24 mx-auto mb-4" 
                    />
                    <h2 className="text-lg font-bold mb-2">Affordable & Cost-Effective</h2>
                    <p>Toxmo offers electric scooters that are not only affordable but also cost-effective in the long run. With low maintenance and charging costs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                        src="https://img.freepik.com/free-vector/support-icon_23-2148518115.jpg" 
                        alt="Comprehensive Support & Service" 
                        className="h-24 w-24 mx-auto mb-4" 
                    />
                    <h2 className="text-lg font-bold mb-2">Comprehensive Support & Service</h2>
                    <p>Toxmo provides exceptional after-sales support, including service and maintenance, ensuring that your scooter stays in top condition.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyWe;
