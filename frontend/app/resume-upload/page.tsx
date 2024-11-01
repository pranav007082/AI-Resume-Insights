// Mark this file as a Client Component
"use client"; // Add this line to enable client-side features

import { useEffect, useState } from 'react';
import { cookies } from 'next/headers';

import { getUserId } from '../lib/actions';

// Component to display user ID
export default function UserProfile() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the user ID when the component mounts
    const fetchUserId = async () => {
      const id = await getUserId();
      setUserId(id);
    };

    fetchUserId();
  }, []);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {userId ? (
        <p>User ID: {userId}</p>
      ) : (
        <p>No user ID found. Please log in.</p>
      )}
    </div>
  );
}
