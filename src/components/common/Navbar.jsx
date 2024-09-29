
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FiMenu } from "react-icons/fi";  

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mx-2 sm:mx-10 lg:mx-44 p-2 backdrop-blur-md text-white rounded-3xl">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              <img 
                src={logo} 
                alt="Primactive Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ fontFamily: 'Audiowide' }}>PRIMACTIVE</span>
            </div>
            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FiMenu className="w-8 h-8" />
              </button>
            </div>
          </div>
          <ul className={`flex-col sm:flex-row items-center gap-2 sm:gap-6 lg:gap-10 mt-2 sm:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <li className="navbar cursor-pointer " onClick={() => navigate('/')}>Home</li>
            <li className="navbar cursor-pointer " onClick={() => navigate('/projects')}>Projects</li>
            <li className="navbar cursor-pointer " onClick={() => navigate('/services')}>Services</li>
          </ul>
        </div>
      )
}

export default Navbar;
