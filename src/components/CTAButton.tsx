import React from 'react';
import { Rocket } from 'lucide-react';

const CTAButton: React.FC = () => {
  return (
    <a
      href="https://clienthub.getjobber.com/client_hubs/a9066f58-c267-4919-ae70-c50814e8c0da/public/work_request/new?source=social_media"
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 inline-flex items-center space-x-3 active:scale-95"
    >
      <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span>Request Service</span>
    </a>
  );
};

export default CTAButton;