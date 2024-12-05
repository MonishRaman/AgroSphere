import React from 'react';
import { useStore } from '../store/useStore';

export const Header: React.FC = () => {
  const { userProfile } = useStore();

  if (!userProfile) return null;

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-4">
      {userProfile.photo && (
        <img
          src={userProfile.photo}
          alt="Farmer Profile"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
      )}
      <span className="text-lg font-semibold text-gray-800">
        Hi, {userProfile.name}!
      </span>
    </div>
  );
};