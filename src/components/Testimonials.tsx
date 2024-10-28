import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Sarah Johnson', text: 'Ground Control transformed our backyard into a stunning oasis. Their attention to detail is remarkable!' },
    { name: 'Mike Peters', text: 'Best lawn service in the area! Professional, reliable, and our yard has never looked better.' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;