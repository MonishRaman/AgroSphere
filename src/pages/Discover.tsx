import React from 'react';

export const Discover: React.FC = () => {
  const videos = [
    { id: '1', url: 'https://www.youtube.com/embed/example1', title: 'Farming Guide' },
    { id: '2', url: 'https://www.youtube.com/embed/example2', title: 'Pest Control' },
    // Add more video links
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-700 text-center py-4">Discover</h1>
      <div className="grid grid-cols-2 gap-6 p-8">
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