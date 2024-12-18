'use client';

import FileInput from "@/components/FileInput";
import UpperLeftLogo from "@/components/Logo/UpperLeftLogo";
import apiService from "../services/apiService";
import { getUserId } from "../lib/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResumeUpload = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const fetchedUserId = await getUserId();
      if (!fetchedUserId) {
        router.push('/login');
      } else {
        setUserId(fetchedUserId);
        setIsLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UpperLeftLogo />
      <h1>User ID: {userId}</h1> {/* Displaying userId for debugging */}
      <div className="flex items-center justify-center min-h-screen">
        <FileInput />
      </div>
    </>
  );
};

export default ResumeUpload;
