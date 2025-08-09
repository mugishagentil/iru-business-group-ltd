import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const AboutSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    <section id="about" className="relative bg-[#2a2c34] text-white">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Key Benefits Section */}
        <div className="bg-[#1b1c20] rounded-lg p-8 shadow-2xl">
          <h4 className="text-sm text-yellow-400 font-semibold tracking-widest uppercase mb-2">
            Key Benefits
          </h4>
          <h2 className="text-3xl font-bold leading-tight mb-6">
            Why should choose us?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At IRU Business Group Ltd, we believe our clients deserve more than just a service they deserve a partner who understands their vision and works tirelessly to achieve it. Our multi-sector expertise, innovative mindset, and commitment to quality set us apart in Rwanda’s competitive market.
          </p>
          
          {/* List of benefits with checkmarks */}
          <ul className="space-y-4">
            <li className="flex items-start text-lg">
              <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <span>Proven track record in multi-sector excellence – from healthcare to technology.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <span>Innovative solutions like Irucore and AI-powered services.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <span>Strong governance and compliance with Rwandan corporate laws.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <span>Skilled leadership team with expertise in diverse industries.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <span>Customer-focused approach ensuring satisfaction at every stage.</span>
            </li>
          </ul>
        </div>
        
        {/* Right Column: Images and Text */}
        <div className="flex flex-col gap-8">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/Goal.jpg"
                alt="Business meeting" 
                className="w-full h-auto" 
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/Priority.jpg"
                alt="Business meeting" 
                className="w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Text and Button below images */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight">
              Business goals are our priority.
            </h3>
            <p className="text-gray-300 leading-relaxed">
             From healthcare and technology to logistics, creative arts, manufacturing, and beyond, we provide innovative, sustainable, and high-quality services that create lasting value for our clients and communities.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg w-fit"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Custom Slanted Shape Divider */}
    <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
      <svg 
        className="relative block w-full h-auto" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
        fill="#1b1c20"
      >
        <polygon points="0,100 1000,0 1000,100"></polygon>
      </svg>
    </div>
  </section>
    </>
  );
};

export default AboutSection;

