import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text }) => {
  return (
    <div className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
      <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{text}"</p>
      <p className="font-bold text-green-400 text-lg">- {name}</p>
    </div>
  );
};

export default TestimonialCard;