import { Check, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#2a2c34] text-white"
      style={{ paddingLeft: '1rem', paddingRight: '1rem' }} // base padding on all devices
    >
      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32
          py-20 lg:py-32
          "
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="bg-[#1b1c20] rounded-lg p-8 shadow-2xl">
            <h4 className="text-sm text-yellow-400 font-semibold tracking-widest uppercase mb-2">
              Key Benefits
            </h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 max-w-[480px]">
              Why should choose us?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-[480px]">
              At IRU Business Group Ltd, we believe our clients deserve more than just a service they deserve a partner who understands their vision and works tirelessly to achieve it. Our multi-sector expertise, innovative mindset, and commitment to quality set us apart in Rwanda’s competitive market.
            </p>
            <ul className="space-y-4 max-w-[480px]">
              {[
                'Proven track record in multi-sector excellence – from healthcare to technology.',
                'Innovative solutions like Irucore and AI-powered services.',
                'Strong governance and compliance with Rwandan corporate laws.',
                'Skilled leadership team with expertise in diverse industries.',
                'Customer-focused approach ensuring satisfaction at every stage.',
              ].map((item, i) => (
                <li key={i} className="flex items-start text-base lg:text-lg">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src="/Goal.jpg" alt="Business meeting" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src="/Priority.jpg" alt="Business meeting" className="w-full h-auto" />
              </div>
            </div>

            <div className="space-y-4 max-w-[480px]">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                Core Values
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-yellow text-xl font-bold">Innovation: </span>
                Leveraging creativity and technology to solve real-world problems.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                <span className="text-yellow text-xl font-bold">Quality: </span>
                Committed to delivering superior products and services.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                <span className="text-yellow text-xl font-bold">Integrity: </span>
                Conducting business with transparency and accountability.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                <span className="text-yellow text-xl font-bold">Diversity: </span>
                Operating across multiple sectors to create holistic growth.
              </p>
              
              {/*<button className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg w-fit">*/}
              {/*  Learn More*/}
              {/*  <ArrowRight className="ml-2 h-5 w-5" />*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </div>

      {/* Slanted Shape Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden pointer-events-none">
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
  );
};

export default AboutSection;
