import React from 'react';
import { Link } from 'react-router-dom';

export const GovConnect: React.FC = () => {
  const options = [
    { name: 'Government Portal', link: '/gov-portal' },
    { name: 'Schemes & Benefits', link: '/schemes' },
    { name: 'Farm Subsidies', link: '/subsidies' },
    { name: 'Support Services', link: '/support' },
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">GovConnect</h1>
      <div className="grid grid-cols-2 gap-8">
        {options.map((option) => (
          <Link
            to={option.link}
            key={option.name}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl"
          >
            <img src="/path-to-logo.png" alt={option.name} className="w-20 h-20" />
            <span className="mt-4 text-green-700 font-medium">{option.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};