import React from 'react';

export const Discover: React.FC = () => {
  const videos = [
    { id: '1', url: 'https://www.youtube.com/embed/2dEnYffO53g', title: 'Farming Techniques' },
    { id: '2', url: 'https://www.youtube.com/embed/fRlUhUWS0Hk', title: 'Pest Control Tips' },
    { id: '3', url: 'https://www.youtube.com/embed/26qTgXJKMAE', title: 'Organic Farming' },
    { id: '4', url: 'https://www.youtube.com/embed/xztjTlnCZiY', title: 'Efficient Irrigation' },
    { id: '5', url: 'https://www.youtube.com/embed/ETZF-oyPSy0', title: 'Crop Management' },
    { id: '6', url: 'https://www.youtube.com/embed/heTxEsrPVdQ', title: 'Sustainable Practices' },
    { id: '7', url: 'https://www.youtube.com/embed/c5pekMjAapo', title: 'Modern Farming Tools' },
    { id: '8', url: 'https://www.youtube.com/embed/qkqtcXuogu4', title: 'Smart Farming' },
    { id: '9', url: 'https://www.youtube.com/embed/nfMLKP1nXK0', title: 'Farming Automation' },
    
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
    >
      <h1 className="text-3xl font-bold text-white text-center py-6 bg-green-900 bg-opacity-50">Discover</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white p-4 shadow-lg rounded-lg">
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-48 rounded-lg"
              allowFullScreen
            ></iframe>
            <h3 className="mt-4 text-lg text-gray-700 font-semibold">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
