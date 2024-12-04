import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { UserCircle2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isAuthenticated, userProfile } = useStore();

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AgroSphere</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/about" className="hover:text-green-200">About Us</Link>
          <Link to="/contact" className="hover:text-green-200">Contact</Link>
          <Link to="/community" className="hover:text-green-200">Community</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              {userProfile?.photo ? (
                <img src={userProfile.photo} alt={userProfile.name} className="w-8 h-8 rounded-full" />
              ) : (
                <UserCircle2 className="w-8 h-8" />
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