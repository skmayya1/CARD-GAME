import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"; // For hamburger and profile icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // To toggle dropdown visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown on user icon click
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-b-xl">
      {/* Logo/Title */}
      <h1 className="text-3xl font-extrabold text-white tracking-wide hover:text-red-700 transition-all duration-300 cursor-pointer">
        Andar Bahar
      </h1>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
        <FaBars className="text-white text-3xl hover:text-red-700 transition-all duration-300" />
      </div>

      {/* Balance and Profile Section */}
      <div className="flex items-center space-x-6 text-white font-medium">
        {/* Balance Section */}
        <div className="flex items-center space-x-2">
          <span className="text-xl">Balance:</span>
          <span className="text-2xl font-semibold">$100.00</span>
        </div>

        {/* Profile Section */}
        <div className="relative flex items-center cursor-pointer" onClick={toggleDropdown}>
          <FaUserCircle className="text-white text-3xl hover:text-gray-700 transition-all duration-300" />
          <span className="text-white ml-2 text-lg">{/*Name */}</span>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-6 w-52 bg-gray-900  rounded-lg shadow-lg p-8 text-white">
              <ul className="space-y-3 text-lg">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Profile</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Transaction</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Deposit</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Withdraw</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Refer</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
};

export default Header;
