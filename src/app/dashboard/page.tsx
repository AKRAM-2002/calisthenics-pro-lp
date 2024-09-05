'use client'

import React from 'react';
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import UserProfile from './components/UserProfile';
import { ActivityCalendar } from './components/ActivityCalendar';

// Import our dashboard components

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  console.log(user)

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    router.push("/")
    return <div>You need to sign in first.</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold mb-6 text-black">Welcome to your Dashboard, {user.firstName}!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UserProfile user={user} />
              <ActivityCalendar/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}






