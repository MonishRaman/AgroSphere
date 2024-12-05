import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { UserCircle2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isAuthenticated, userProfile } = useStore();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);

  // Toggle dropdowns
  const toggleProfileDropdown = () => setIsProfileDropdownOpen((prev) => !prev);
  const toggleOthersDropdown = () => setIsOthersDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">AgroSphere</Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/about" className="hover:text-green-200">About Us</Link>
          <Link to="/contact" className="hover:text-green-200">Contact</Link>
          <Link to="/community" className="hover:text-green-200">Community</Link>

          {/* Others Dropdown */}
          <div className="relative">
            <button
              onClick={toggleOthersDropdown}
              className="hover:text-green-200"
            >
              Others
            </button>
            {isOthersDropdownOpen && (
              <div className="absolute top-8 right-0 bg-white text-green-700 rounded-lg shadow-lg w-48 z-50">
                <Link to="/govconnect" className="block px-4 py-2 hover:bg-green-100">GovConnect</Link>
                <Link to="/agrimart" className="block px-4 py-2 hover:bg-green-100">AgriMart</Link>
                <Link to="/discover" className="block px-4 py-2 hover:bg-green-100">Discover</Link>
                <Link to="/faqs" className="block px-4 py-2 hover:bg-green-100">FAQ's</Link>
              </div>
            )}
          </div>

          {/* Profile Section or Login Button */}
          {isAuthenticated ? (
            <div className="relative">
              <div 
                className="flex items-center space-x-2 cursor-pointer" 
                onClick={toggleProfileDropdown}
              >
                {userProfile?.photo ? (
                  <img
                    src={userProfile.photo}
                    alt={userProfile.name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <UserCircle2 className="w-8 h-8" />
                )}
                <span>{userProfile?.name}</span>
              </div>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute top-12 right-0 bg-white text-green-700 p-4 rounded-lg shadow-lg w-64 z-50">
                  <h3 className="text-xl font-semibold border-b pb-2">Profile Details</h3>
                  <div className="mt-4 space-y-2">
                    <p><strong>Name:</strong> {userProfile.name}</p>
                    <p><strong>Age:</strong> {userProfile.age}</p>
                    <p><strong>Gender:</strong> {userProfile.gender}</p>
                    <p><strong>Farming Type:</strong> {userProfile.farmingType}</p>
                    <p>
                      <strong>Location:</strong> 
                      {` ${userProfile.location.latitude.toFixed(4)}, ${userProfile.location.longitude.toFixed(4)}`}
                    </p>
                  </div>
                </div>
              )}
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
