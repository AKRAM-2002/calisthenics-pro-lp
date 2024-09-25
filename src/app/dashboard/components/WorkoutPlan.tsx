import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Info, X } from 'lucide-react';
import { AIAssistantModal } from '../components/AIAssistantModal'
const WorkoutPlan = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workoutSchedule = [
    { day: 'Monday', workout: 'Upper Body', exercises: ['Bench Press', 'Pull-ups', 'Shoulder Press'] },
    { day: 'Tuesday', workout: 'Lower Body', exercises: ['Squats', 'Deadlifts', 'Lunges'] },
    { day: 'Wednesday', workout: 'Cardio', exercises: ['Running', 'Cycling', 'Jump Rope'] },
    { day: 'Thursday', workout: 'Core', exercises: ['Planks', 'Russian Twists', 'Leg Raises'] },
    { day: 'Friday', workout: 'Full Body', exercises: ['Burpees', 'Kettlebell Swings', 'Mountain Climbers'] },
    { day: 'Saturday', workout: 'Active Recovery', exercises: ['Yoga', 'Light Jogging', 'Stretching'] },
    { day: 'Sunday', workout: 'Rest Day', exercises: [] },
  ];

  const handlePreviousWeek = () => {
    setCurrentWeek((prev) => Math.max(prev - 1, 0));
  };

  const handleNextWeek = () => {
    setCurrentWeek((prev) => prev + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Workout Plan</h2>
        <div className="flex items-center space-x-4">
          <button onClick={handlePreviousWeek} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <span className="text-lg font-semibold text-gray-700">Week {currentWeek + 1}</span>
          <button onClick={handleNextWeek} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workoutSchedule.map((day, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{day.day}</h3>
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <p className="text-md font-medium text-gray-700 mb-2">{day.workout}</p>
            <ul className="space-y-1">
              {day.exercises.map((exercise, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <Info className="w-4 h-4 mr-2 text-blue-500" />
                  {exercise}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Customize Plan
        </button>
      </div>

      <AIAssistantModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default WorkoutPlan;