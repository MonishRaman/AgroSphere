import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MapPin, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { FarmingType } from '../types';

export const ProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    photo: '',
    mobile: '',
    farmingType: '' as FarmingType,
    location: { latitude: 0, longitude: 0 }
  });
  const [photoPreview, setPhotoPreview] = useState('');
  const [locationError, setLocationError] = useState<string | null>(null);
  const [manualLocation, setManualLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }));
          setLocationError(null);
        },
        (error) => {
          let errorMessage = 'Unable to get your location.';
          if (error.code === 1) {
            errorMessage = 'Location access was denied. You can enter your coordinates manually.';
          } else if (error.code === 2) {
            errorMessage = 'Location information is unavailable.';
          } else if (error.code === 3) {
            errorMessage = 'Location request timed out.';
          }
          setLocationError(errorMessage);
          setManualLocation(true);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      setManualLocation(true);
    }
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPhotoPreview(base64String);
        setFormData(prev => ({ ...prev, photo: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (coord: 'latitude' | 'longitude', value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [coord]: numValue
        }
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      ...formData,
      age: parseInt(formData.age, 10)
    });
    navigate('/dashboard');
  };

  const farmingTypes: FarmingType[] = [
    'Subsistence',
    'Commercial',
    'Plantation',
    'Mixed',
    'Intensive',
    'Organic'
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Complete Your Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Profile preview"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full cursor-pointer hover:bg-green-700">
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Farming Type</label>
                <select
                  value={formData.farmingType}
                  onChange={(e) => setFormData(prev => ({ ...prev, farmingType: e.target.value as FarmingType }))}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select Farming Type</option>
                  {farmingTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                {locationError && (
                  <div className="flex items-center space-x-2 text-amber-600 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">{locationError}</span>
                  </div>
                )}
                {manualLocation ? (
                  <div className="space-y-2">
                    <input
                      type="number"
                      step="0.000001"
                      placeholder="Latitude"
                      value={formData.location.latitude || ''}
                      onChange={(e) => handleLocationChange('latitude', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="number"
                      step="0.000001"
                      placeholder="Longitude"
                      value={formData.location.longitude || ''}
                      onChange={(e) => handleLocationChange('longitude', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mt-1 flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>
                      {formData.location.latitude.toFixed(4)}, {formData.location.longitude.toFixed(4)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-8"
            >
              Complete Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};