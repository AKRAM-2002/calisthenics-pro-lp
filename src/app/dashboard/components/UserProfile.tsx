import React from 'react';
import Image from 'next/image';

interface AdditionalUserData {
  weight: number;
  bodyFat: number;
  bmi: number;
  followers: number;
  following: number;
  ranking: number;
}

interface UserProfileProps {
  firstName: string;
  email: string;
  imageUrl: string;
  additionalData: AdditionalUserData;
}

const UserProfile: React.FC<UserProfileProps> = ({ firstName, email, imageUrl, additionalData }) => {  

  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-black font-bold">{firstName}&apos;s Profile</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
      
      <div className="flex items-center mb-6">
        <Image
          src={imageUrl}
          alt={firstName}
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-black">{firstName}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      {/* account details */}
      <div className="grid grid-cols-3 gap-4 bg-blue-500 text-white p-4 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold">{additionalData.weight}</p>
          <p>Weight (kg)</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{additionalData.bodyFat}</p>
          <p>Body Fat (%)</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{additionalData.bmi}</p>
          <p>BMI</p>
        </div>
      </div>

      {/* Follower, following, and ranking details */}
      <div className="flex justify-between mt-4 bg-gray-200 p-4 rounded-lg text-black">
        <div className="text-center">
          <p className="text-2xl font-bold">{additionalData.followers}</p>
          <p className='font-bold'>Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{additionalData.following}</p>
          <p className='font-bold'>Following</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">#{additionalData.ranking}</p>
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
