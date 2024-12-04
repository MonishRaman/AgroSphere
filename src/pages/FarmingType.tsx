import React from 'react';
import { useParams } from 'react-router-dom';
import { farmingDescriptions } from '../utils/farmingDescriptions';

export const FarmingType: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const description = type ? farmingDescriptions[type.toLowerCase()] : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-green-800 mb-6 capitalize">{type} Farming</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};