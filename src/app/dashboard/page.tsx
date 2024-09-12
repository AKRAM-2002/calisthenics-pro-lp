"use client";

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
import SkillsSection from './components/SkillsSection';

interface AdditionalUserData {
  weight: number;
  bodyFat: number;
  bmi: number;
  followers: number;
  following: number;
  ranking: number;
}

interface UserProgress {
  overallLevel: string;
  goals: string[];
  streak: string[];
  achievements: string[];
  skills: {
    name: string;
    level: number;
  }[];
}

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user)
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState('Daily Habits');
  const [loading, setLoading] = useState(true);
  const [userProgress, setUserProgress] = useState<UserProgress | null>({
    overallLevel: '',  // Set default values for expected keys
    goals: [],
    streak: [],
    achievements: [],
    skills: [],
  });
 // Simulate fetching user progress data
  const [additionalUserData, setAdditionalUserData] = useState<AdditionalUserData | null>(null);

  
  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/");
        return;
      }
      
      // Simulate fetching additional user data
      setTimeout(() => {
        const fetchedUserData = {
          weight: 75, // kg
          bodyFat: 12.5, // %
          bmi: 22.3,
          followers: 300,
          following: 180,
          ranking: 42,
        };

        const fetchedUserProgress = {
          overallLevel: '5',  // Example data
          goals: ['Achieve 50 pull-ups', 'Increase handstand duration'],
          streak: ['green', 'green', 'gray', 'gray', 'gray', 'green', 'green'],
          achievements: ['Completed first muscle-up', 'Held 60-second plank'],
          skills: [
            { name: 'Pull-ups', level: 7 },
            { name: 'Handstands', level: 5 },
          ],
        };


        setAdditionalUserData(fetchedUserData);
        setUserProgress(fetchedUserProgress);

        
        setLoading(false);
      }, 2000);
    }
  }, [isLoaded, isSignedIn, router]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/auth/new-user');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        console.log(data);  // This should log the response from the API
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  



  if (!isLoaded || loading || !additionalUserData) {
    return <LoadingSpinner />;
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'Exercise':
        return <FitnessOverview userProgress={userProgress} />;
      case 'Workout Plan':
        return <WorkoutPlan />;
      case 'View Skills':
        return <SkillsSection/>;
      case 'Daily Habits':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user && (
              <UserProfile
                firstName={user.firstName || 'N/A'}
                email={user.primaryEmailAddress?.emailAddress || 'No email available'}
                imageUrl={user.imageUrl || 'defaultImage.jpg'}
                additionalData={additionalUserData}
              />
            )}
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
              Welcome to your Dashboard, {user?.firstName || 'User'}!
            </h1>
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
