import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FarmingType } from '../types';

interface Props {
  type: FarmingType;
  image: string;
  isSelected: boolean;
}

export const FarmingTypeCard: React.FC<Props> = ({ type, image, isSelected }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
        isSelected ? 'ring-4 ring-green-500' : ''
      }`}
      onClick={() => navigate(`/farming/${type.toLowerCase()}`)}
    >
      <img src={image} alt={type} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{type} Farming</h3>
        <div className="flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/farming/${type.toLowerCase()}/diseases`);
            }}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Diseases
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/farming/${type.toLowerCase()}/yield`);
            }}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Yield
          </button>
        </div>
      </div>
    </div>
  );
};