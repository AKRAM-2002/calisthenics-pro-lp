import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';


const TransformationSection = () => {
  return (
    <div className="bg-black text-white p-16 justify-center">
      <div className="grid grid-cols-2 gap-24">
        {/* Left column - Images */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top image */}
          <div className="w-full h-96 relative">
            <Image
              src="/assets/gym-hands.png"
              alt="Hands preparing for workout"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Bottom row with two images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 relative">
              <Image
                src="/assets/gym-girl.png"
                alt="Woman working out"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-48 relative -mt-8">
              <Image
                src="/assets/gym-boy.png"
                alt="Man working out"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Right column - Text content */}
        <div className="flex flex-col mt-[5rem]">
          <h2 className="text-4xl font-bold mb-6">Transform your physique with our fitness plan.</h2>
          <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">
              <FaCheck />
            </span>
            Visualize your progress and celebrate milestones
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">
              <FaCheck />
            </span>
            Stay motivated by connecting with like-minded individuals
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">
              <FaCheck />
            </span>
            Achieve your fitness goals faster with personalized AI guidance
          </li>
        </ul>

          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Join now</button>
            <button className="border border-white text-white px-6 py-2 rounded">Contact us</button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="-mt-16 flex justify-between items-center bg-[#0D0D0D] py-16 px-6 rounded-lg">
        <p className="text-lg font-semibold">
          Enhance your experience in Calisthenics with smart training tips, support resources, and social elements.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Join us</button>
      </div>
    </div>
  );
};

export default TransformationSection;