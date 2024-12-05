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
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/30" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6 inline-block mb-4">
            <Sprout className="w-20 h-20 mx-auto text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-white leading-tight">
            Welcome to AgroSphere
          </h1>
          
          <p className="text-3xl text-green-50">
            {greeting}, Farmer!
          </p>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Your digital companion for smart, sustainable farming. Join our community of farmers and unlock the power of modern agricultural solutions.
          </p>

          {!isAuthenticated && (
            <div className="mt-12 space-y-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <p className="text-green-50 text-sm">
                Join thousands of farmers already using AgroSphere
              </p>
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Smart Farming</h3>
              <p className="text-green-50">Access modern agricultural techniques and real-time insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Disease Detection</h3>
              <p className="text-green-50">Early detection and treatment recommendations for crop diseases</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Yield Analysis</h3>
              <p className="text-green-50">Optimize your crop yield with data-driven insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};