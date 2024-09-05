'use client';

import { SignOutButton, useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div className="flex items-end justify-between">
    <div>Hello, {user.firstName}!</div>
    <div><SignOutButton/></div>
  </div>;
}