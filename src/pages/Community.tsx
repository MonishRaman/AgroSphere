import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Join Our Farming Community</h1>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
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
    </div>
  );
};