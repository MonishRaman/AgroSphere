import React from 'react';
import { Sprout, Users, Globe, Shield } from 'lucide-react';
import { PageBackground } from '../components/PageBackground';
import { backgrounds } from '../utils/backgroundImages';

export const About: React.FC = () => {
  return (
    <PageBackground image={backgrounds.about}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-green-800 text-center mb-12">About AgroSphere</h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AgroSphere is a comprehensive platform dedicated to empowering farmers with modern
              technology and sustainable farming practices. Our mission is to bridge the gap between
              traditional farming wisdom and cutting-edge agricultural innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start space-x-4">
                <Sprout className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Farming</h3>
                  <p className="text-gray-600">Promoting eco-friendly and sustainable farming practices for a better future.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Community Support</h3>
                  <p className="text-gray-600">Building a strong network of farmers for knowledge sharing and support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Global Reach</h3>
                  <p className="text-gray-600">Connecting farmers worldwide to share experiences and best practices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Crop Protection</h3>
                  <p className="text-gray-600">Advanced disease detection and yield optimization tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};