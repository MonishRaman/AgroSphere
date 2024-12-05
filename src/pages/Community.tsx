import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PageBackground } from '../components/PageBackground';
import { backgrounds } from '../utils/backgroundImages';

export const Community: React.FC = () => {
  return (
    <PageBackground image={backgrounds.community}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Join Our Farming Community</h1>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8">
            <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            
            <p className="text-lg text-gray-700 mb-8">
              Connect with fellow farmers, share experiences, and learn from each other in our
              WhatsApp community group.
            </p>

            <a
              href="https://chat.whatsapp.com/H7b5CgtK0sfHriEN1Km1cW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};