'use client';
import { motion } from 'framer-motion';
import { MdFitnessCenter, MdGroup, MdSmartToy, MdRestaurant } from 'react-icons/md';
import { useRef, useEffect } from 'react';
import './Features.css';

const features = [
  { icon: MdFitnessCenter, title: 'Skill Tracking', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.' },
  { icon: MdGroup, title: 'Social Networking', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.' },
  { icon: MdSmartToy, title: 'AI Guidance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.' },
  { icon: MdRestaurant, title: 'Nutrition', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.' },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const totalWidth = scrollContainer.scrollWidth / 2;

      // Scroll loop logic
      const scrollAnimation = () => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= totalWidth) {
          scrollContainer.scrollLeft = 0;
        }
      };

      const scrollInterval = setInterval(scrollAnimation, 10); // Adjust speed here
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="bg-black text-white p-8 relative">
      <div className="flex justify-between items-center mb-24">
        <div className="absolute -left-6 flex items-center justify-center overflow-hidden">
          <div className="text-[10rem] font-bold text-gray-200 opacity-20 whitespace-nowrap">
            Program
          </div>
        </div>
        <h2 className="text-5xl font-bold px-8 mt-4">Explore Our Program</h2>
      </div>
      <div className="scroller overflow-hidden" ref={scrollRef}>
        <div className="scroller__inner">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] bg-gray-900 p-6 rounded-lg"
              whileHover={{ scale: 1.1 }}
            >
              <feature.icon className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
          {/* Duplicate the items */}
          {features.map((feature, index) => (
            <motion.div
              key={`clone-${index}`}
              className="min-w-[250px] bg-gray-900 p-6 rounded-lg"
              whileHover={{ scale: 1.1 }}
            >
              <feature.icon className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
