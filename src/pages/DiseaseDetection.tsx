import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export const DiseaseDetection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Simulate disease detection
        setTimeout(() => {
          setDiagnosis("Based on the image analysis, the crop appears to show signs of leaf blight. Recommended treatment: Apply copper-based fungicide and ensure proper spacing between plants for better air circulation.");
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Disease Detection</h1>
          
          <div className="mb-8">
            <label className="block text-center p-8 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:border-green-500">
              <Upload className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <span className="text-gray-600">Upload crop image for analysis</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {selectedImage && (
            <div className="mb-8">
              <img
                src={selectedImage}
                alt="Selected crop"
                className="max-w-full h-auto rounded-lg mx-auto"
              />
            </div>
          )}

          {diagnosis && (
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-2">Diagnosis Result</h2>
              <p className="text-gray-700">{diagnosis}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};