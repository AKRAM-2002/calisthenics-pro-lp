import React from 'react';
import Image from 'next/image';

interface EmailAddress {
  emailAddress: string;
}

interface User {
  firstName: string;
  lastName: string | null;
  emailAddresses?: EmailAddress[];
  primaryEmailAddress?: EmailAddress;
  imageUrl: string;
  weight: number;
  bodyFat: number;
  bmi: number;
  followers: number;
  following: number;
  ranking: number;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
  const email = user.primaryEmailAddress?.emailAddress || 'No email Provided';

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-black font-bold">{fullName}&apos;s Profile</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
      
      <div className="flex items-center mb-6">
        <Image
          src={user.imageUrl}
          alt={fullName}
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-black">{fullName}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      {/* account details */}
      <div className="grid grid-cols-3 gap-4 bg-blue-500 text-white p-4 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold">{user.weight}</p>
          <p>Weight (kg)</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{user.bodyFat}</p>
          <p>Body Fat (%)</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{user.bmi}</p>
          <p>BMI</p>
        </div>
      </div>

      {/* Follower, following, and ranking details */}
      <div className="flex justify-between mt-4 bg-gray-200 p-4 rounded-lg text-black">
        <div className="text-center">
          <p className="text-2xl font-bold">{user.followers}</p>
          <p className='font-bold'>Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{user.following}</p>
          <p className='font-bold'>Following</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">#{user.ranking}</p>
          <p className='font-bold'>Ranking</p>
        </div>
      </div>
      
      {/* Placeholder for additional sections */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-black">Recent Activity</h3>
        {/* Add recent activity component here */}
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-black">Goals</h3>
        {/* Add goals component here */}
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-black">Achievements</h3>
        {/* Add achievements component here */}
      </div>
    </div>
  );
};

export default UserProfile;
