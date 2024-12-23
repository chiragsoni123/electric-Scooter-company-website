import { Link, useNavigate } from 'react-router-dom'; 
import About from './About'; 
import Home from './Home'; 

function Header() {
    const base64Image = "/vite.svg";
    const navigate = useNavigate();  

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Navigate to the selected route
        }
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={base64Image} alt="Logo" />
                    <span className="ml-3 text-xl">Jyoti Autoparts</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                     <Link to="./about" className="mr-5 hover:text-gray-900">About</Link>
                    <select onChange={handleSelectChange} className="mr-5 hover:text-gray-900 p-2 border border-none rounded">
                        <option value="/">Scooter</option>
                        <option value="/scooter1">KN</option>
                        <option value="/scooter2">318</option>
                        <option value="/scooter3">Rock</option>
                    </select>
                   
                    <Link to="/parts" className="mr-5 hover:text-gray-900">Parts</Link>
                    <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;