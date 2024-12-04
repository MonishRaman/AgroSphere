import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { getTimeBasedGreeting } from '../utils/timeGreeting';
import { useStore } from '../store/useStore';

export const Home: React.FC = () => {
  const { isAuthenticated } = useStore();
  const navigate = useNavigate();
  const greeting = getTimeBasedGreeting();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <Sprout className="w-20 h-20 mx-auto text-green-600" />
          <h1 className="text-5xl font-bold text-green-800">Welcome to AgroSphere</h1>
          <p className="text-2xl text-green-700">{greeting}, Farmer!</p>
          
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful farmland"
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>

          {!isAuthenticated && (
            <button
              onClick={() => navigate('/login')}
              className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};