'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import UserProfile from './components/UserProfile';
import { ActivityCalendarComponent } from './components/ActivityCalendar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import FitnessOverview from './components/FitnessOverview';
import WorkoutPlan from './components/WorkoutPlan';

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState('Daily Habits');
  const [loading, setLoading] = useState(true);
  const [userProgress, setUserProgress] = useState(null); // State to hold the user progress data

  // Simulate fetching user progress data
  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/");
        return;
      }

      // Simulate API request to fetch user progress
      setTimeout(() => {
        const fetchedUserProgress = {
          overallLevel: 5, // Example level
          goals: ['Master handstand', 'Increase pull-up reps'],
          streak: ['green', 'green', 'gray', 'green', 'green'], // Example streak
          achievements: ['First Muscle-Up', 'First Planche Hold'],
          skills: [
            { name: 'Handstand', level: 7 },
            { name: 'Muscle-Up', level: 5 },
          ],
        };

        setUserProgress(fetchedUserProgress);
        setLoading(false); // Set loading to false once data is fetched
      }, 2500); // Simulate a delay
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading spinner until the data is loaded
  if (!isLoaded || loading) {
    return <LoadingSpinner />;
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'Exercise':
        return <FitnessOverview userProgress={userProgress} />; // Pass userProgress as prop
      case 'Workout Plan':
        return <WorkoutPlan />;
      case 'View Skills':
        return <div>View Skills Component</div>; // Replace with actual view skills component
      case 'Daily Habits':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user && <UserProfile user={user} />}
            <ActivityCalendarComponent />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold mb-6 text-black">
              Welcome to your Dashboard, {user.firstName}!
            </h1>
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
