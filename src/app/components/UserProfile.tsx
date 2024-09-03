'use client';

import { useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div>Hello, {user.firstName}!</div>;
}