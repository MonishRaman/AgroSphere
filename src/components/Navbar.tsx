import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const Navbar: React.FC = () => {
  const { isAuthenticated, userProfile } = useStore();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => setIsProfileDropdownOpen((prev) => !prev);
  const toggleOthersDropdown = () => setIsOthersDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AgroSphere</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/about" className="hover:text-green-200">About Us</Link>
          <Link to="/contact" className="hover:text-green-200">Contact</Link>
          <Link to="/community" className="hover:text-green-200">Community</Link>

          <div className="relative">
            <button
              onClick={toggleOthersDropdown}
              className="hover:text-green-200"
            >
              Others
            </button>
            {isOthersDropdownOpen && (
              <div className="absolute top-8 bg-white text-green-700 rounded-lg shadow-lg w-48 z-50">
                <Link to="/govconnect" className="block px-4 py-2 hover:bg-green-100">GovConnect</Link>
                <Link to="/agrimart" className="block px-4 py-2 hover:bg-green-100">AgriMart</Link>
                <Link to="/discover" className="block px-4 py-2 hover:bg-green-100">Discover</Link>
                <Link to="/faqs" className="block px-4 py-2 hover:bg-green-100">FAQ's</Link>
              </div>
            )}
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              {userProfile?.photo ? (
                <img
                  src={userProfile.photo}
                  alt={userProfile.name}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={toggleProfileDropdown}
                />
              ) : (
                <UserCircle2
                  className="w-8 h-8 cursor-pointer"
                  onClick={toggleProfileDropdown}
                />
              )}
              <span>{userProfile?.name}</span>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};