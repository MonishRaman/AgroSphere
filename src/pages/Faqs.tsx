import React from 'react';

export const Faqs: React.FC = () => {
  const faqs = [
    { question: 'What is sustainable farming?', answer: 'It involves farming practices that protect the environment.' },
    { question: 'How to get subsidies?', answer: 'You can apply via GovConnect under the Subsidy section.' },
    // Add more FAQs
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 text-center py-4">FAQ's</h1>
      <div className="max-w-4xl mx-auto mt-8 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};