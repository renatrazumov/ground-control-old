import React from 'react';
import { Leaf, Star, CheckCircle2 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    { title: 'Lawn Maintenance', description: 'Regular mowing, edging, and trimming to keep your yard pristine', icon: Leaf },
    { title: 'Landscape Design', description: 'Custom landscape planning and installation', icon: Star },
    { title: 'Seasonal Cleanup', description: 'Spring and fall cleanup to maintain yard health', icon: CheckCircle2 },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;