import React from 'react';
import { Instagram } from 'lucide-react';

const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.instagram.com/groundcontrollandscaping401"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 transition-colors flex items-center space-x-2 group"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} className="group-hover:scale-110 transition-transform" />
        <span>Follow us on Instagram</span>
      </a>
    </div>
  );
};

export default SocialMedia;