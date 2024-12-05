import React from 'react';
import { useStore } from '../store/useStore';
import { getTimeBasedGreeting } from '../utils/timeGreeting';
import { FarmingTypeCard } from '../components/FarmingTypeCard';
import { FarmingType } from '../types';

export const Dashboard: React.FC = () => {
  const { userProfile } = useStore();
  const greeting = getTimeBasedGreeting();

  const farmingTypes: Array<{ type: FarmingType; image: string }> = [
    {
      type: 'Subsistence',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
    },
    {
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80'
    },
    {
      type: 'Plantation',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80'
    },
    {
      type: 'Mixed',
      image: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=600&q=80'
    },
    {
      type: 'Intensive',
      image: 'https://www.straydoginstitute.org/wp-content/uploads/2022/05/iStock-506164764.jpg'
    },
    {
      type: 'Organic',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            {greeting}, {userProfile?.name}!
          </h1>
          <p className="text-lg text-green-600">Welcome to your farming dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmingTypes.map((farming) => (
            <FarmingTypeCard
              key={farming.type}
              type={farming.type}
              image={farming.image}
              isSelected={userProfile?.farmingType === farming.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};