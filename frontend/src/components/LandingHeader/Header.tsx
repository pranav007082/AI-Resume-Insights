"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { getUserId, resetAuthCookies } from "@/app/lib/actions";
import { useRouter } from "next/navigation"; // Updated import for useRouter
import LogoutButton from "../Buttons/LogoutButton"; // If used

export default function Header() {
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    async function fetchUserId() {
      try {
        const id = await getUserId();
        setUserId(id); // If `id` exists, user is logged in
      } catch (error) {
        console.error("Error fetching user ID:", error);
        setUserId(null); // Fallback in case of an error
      }
    }

    fetchUserId();
  }, []);

  const submitLogout = async () => {
    try {
      await resetAuthCookies(); // Replace with your actual logout logic
      setUserId(null); // Reset userId after logout
      router.push("/"); // Redirect to home
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center justify-end gap-3">
            {userId ? (
              <>
              <li>
                  <Link
                    href="/resume-analysis"
                    className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                  >
                    Dashboard
                  </Link>
                </li>
              <li>
                <button
                  onClick={submitLogout}
                  className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                >
                  Logout
                </button>
              </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
