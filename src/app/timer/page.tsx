"use client"

import React, { useState, useEffect } from 'react';

const TimerPage = () => {
  const [minutes, setMinutes] = useState(15);
  const [workoutType, setWorkoutType] = useState('skill');
  const [showResults, setShowResults] = useState(false);
  const [currentExercise, setCurrentExercise] = useState('');
  const [nextExercise, setNextExercise] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const exercises = [
    { name: 'Get Ready!!', duration: 10, type: 'rest' },
    { name: 'Jumping Jacks', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Wall Sit', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Push-up', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Abdominal Crunch', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Step-up onto Chair', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Squat', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Triceps Dip on Chair', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'Plank', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
    { name: 'High Knees', duration: 30, type: 'work' },
    { name: 'Rest', duration: 10, type: 'rest' },
  ];

  useEffect(() => {
    let interval = null;
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1);
        setElapsedTime(elapsedTime => elapsedTime + 1);
      }, 1000);
    } else if (!isActive && timeRemaining !== 0) {
      clearInterval(interval);
    } else if (timeRemaining === 0) {
      moveToNextExercise();
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  const startWorkout = () => {
    setShowResults(true);
    setTotalTime(exercises.reduce((acc, exercise) => acc + exercise.duration, 0));
    moveToNextExercise();
    setIsActive(true);
  };

  const moveToNextExercise = () => {
    const currentIndex = exercises.findIndex(ex => ex.name === currentExercise);
    const nextIndex = currentIndex + 1;
    if (nextIndex < exercises.length) {
      setCurrentExercise(exercises[nextIndex].name);
      setTimeRemaining(exercises[nextIndex].duration);
      setNextExercise(nextIndex + 1 < exercises.length ? exercises[nextIndex + 1].name : 'Workout Complete!');
    } else {
      setCurrentExercise('Workout Complete!');
      setNextExercise('');
      setIsActive(false);
    }
  };

  const togglePause = () => setIsActive(!isActive);

  const resetWorkout = () => {
    setShowResults(false);
    setCurrentExercise('');
    setNextExercise('');
    setTimeRemaining(0);
    setElapsedTime(0);
    setIsActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-8">
      {!showResults ? (
        <>
          <h1 className="text-4xl font-extrabold mb-8 text-blue-700">Customize Your Workout</h1>
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <label className="block mb-2 font-medium text-gray-700">Workout Duration (minutes):</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full border p-3 rounded-lg mb-6 shadow-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <label className="block mb-2 font-medium text-gray-700">Workout Type:</label>
            <select
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              className="w-full border p-3 rounded-lg mb-6 shadow-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="skill">Skill</option>
              <option value="endurance">Endurance</option>
              <option value="strength">Strength</option>
            </select>
            <button
              className="w-full font-semibold bg-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              onClick={startWorkout}
            >
              Start Workout
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">7 Minute Workout</h2>
          <div className="text-center mb-8">
            <h3 className="text-6xl font-bold text-green-500 mb-4">{currentExercise}</h3>
            <p className="text-2xl font-semibold">Next: {nextExercise}</p>
            <div className="text-8xl font-bold text-blue-600 mt-4">
              {String(Math.floor(timeRemaining / 60)).padStart(2, '0')}:
              {String(timeRemaining % 60).padStart(2, '0')}
            </div>
          </div>
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${(elapsedTime / totalTime) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>00:00</span>
              <span>{String(Math.floor(totalTime / 60)).padStart(2, '0')}:{String(totalTime % 60).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="flex justify-between mb-6">
            <button
              className="bg-yellow-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
              onClick={togglePause}
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              onClick={togglePause}
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
              onClick={resetWorkout}
            >
              Reset
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Workout Plan:</h4>
            <ul className="space-y-2">
              {exercises.map((exercise, index) => (
                <li key={index} className="flex justify-between">
                  <span>{exercise.name}</span>
                  <span>{exercise.duration}s {exercise.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerPage;