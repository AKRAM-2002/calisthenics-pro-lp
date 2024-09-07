import React from 'react';
import Image from 'next/image';

const FitnessOverview = ({ userProgress, aiTip, recentActivities }) => {

  
  const activities = [
    { title: "Full Body Workout", description: "Completed 12 exercises, 45 minutes", time: "1 hour ago" },
    { title: "Push-up Level Up!", description: "Achieved 30 consecutive push-ups", time: "Today at 9:15 AM" },
    { title: "Challenge Accepted", description: "John's 100 Push-up Challenge", time: "Today at 9:15 AM" },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Overview and Goals */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Track Your Calisthenics Mastery</h2>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-green-600">{userProgress.overallLevel}/10</span>
              </div>
              <p className="absolute -bottom-8 text-center w-full text-gray-700 font-medium">Current Skill Level</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Goals</h3>
              <ul className="space-y-3">
                {userProgress.goals.map((goal, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Current Streak */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Streak:</h3>
            <div className="flex space-x-3">
              {userProgress.streak.map((status, index) => (
                <div key={index} className={`w-10 h-14 rounded-md bg-${status}-500 shadow-md`}></div>
              ))}
            </div>
          </div>
          
          {/* Achievements and Skill Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Achievements</h3>
              <ul className="space-y-2 text-gray-700">
                {userProgress.achievements.map((achievement, index) => (
                  <li key={index}>🏅 {achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Track Skills</h3>
              <div className="space-y-3">
                {userProgress.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-24 text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div className={`bg-blue-600 h-2.5 rounded-full w-${skill.level}/12`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar Section: Muscle Anatomy and AI Tips */}
        <div className="space-y-8">
          <div className="relative p-4 rounded-xl">
            <Image src="/assets/muscle-anatomy.png" alt="Muscle Anatomy" width={400} height={500} className="mx-auto" />
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Today&apos;s AI Tips</h3>
            <p className="text-gray-700 mb-4">{aiTip}</p>
            <div className="flex justify-between mt-6">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition-colors">
                Refresh Tips
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors">
                Suggest Workout
              </button>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Recent Activity</h3>
              <button className="text-purple-600 hover:text-purple-700 transition-colors">View All</button>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessOverview;
