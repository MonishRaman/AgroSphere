import React from 'react';

export const Faqs: React.FC = () => {
  const faqs = [
    {
      question: 'What is AgriMart?',
      answer: 'AgriMart is an online platform that connects farmers and consumers, allowing them to buy and sell agricultural products easily.',
    },
    {
      question: 'Who can sell products on AgriMart?',
      answer: 'Any farmer or agricultural vendor can register on AgriMart to sell their products.',
    },
    {
      question: 'Is there a fee for using AgriMart?',
      answer: 'AgriMart is free to use for buyers. Sellers pay a small commission on each sale.',
    },
    {
      question: 'How do I purchase a product?',
      answer: 'Simply browse the products, add items to your cart, and complete the checkout process.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, debit cards, and UPI payments.',
    },
    {
      question: 'How does AgriMart ensure product quality?',
      answer: 'Sellers are verified, and buyers can leave reviews to help maintain quality standards.',
    },
    {
      question: 'Can I track my orders?',
      answer: 'Yes, once your order is placed, you will receive a tracking link via email or SMS.',
    },
    {
      question: 'What is the return policy?',
      answer: 'Returns are accepted within 7 days of delivery for damaged or incorrect products.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach us via the Contact Us page or call our 24/7 helpline.',
    },
    {
      question: 'Is AgriMart available on mobile?',
      answer: 'Yes, AgriMart is mobile-friendly and can be accessed through any browser on your smartphone.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 text-center py-4">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto mt-8 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
