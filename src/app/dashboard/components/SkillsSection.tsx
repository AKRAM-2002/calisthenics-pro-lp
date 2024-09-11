import React from 'react';
import Image from 'next/image';
import { Plus, ChevronDown } from 'lucide-react';

const SkillsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Exercises
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center">
            My Library
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300 flex items-center text-sm">
          <Plus size={16} className="mr-1" />
          Add Exercise
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-64 h-64 mb-4 relative">
          <Image
            src="https://au.thegravgear.com/cdn/shop/articles/illustration_of_a_yellow_dude_mannequin_man_calisthenics_athlete_scratching_the_back_of_his_head_looking_confused.webp?v=1714743741&width=640"
            alt="Yellow calisthenics athlete"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <p className="text-xl font-semibold mb-2 text-gray-800">Start adding Skills</p>
        <p className="text-sm text-gray-600 mb-4">Click on  &quot;&quot;Add Skill&quot;&quot;  to start.</p>
        <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-blue-600 transition duration-300 flex items-center shadow-md">
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;