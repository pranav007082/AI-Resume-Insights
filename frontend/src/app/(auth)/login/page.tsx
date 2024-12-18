"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { getUserId, handleLogin } from "@/app/lib/actions";
import Link from "next/link";
import "../../styles/style.css";

export default function SignIn() {
  const router = useRouter()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async(event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password
    }
    const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData))
    console.log(response)
    if(response.access){
      handleLogin(response.user.pk, response.access, response.refresh)
      const userId = await getUserId();
      const res = await apiService.get(`/api/ats/${userId}/is-exist`);
      if (res.success){
        router.push(`/resume-analysis`)
      }
      else{
        router.push('/resume-upload')
      }
    } else {
      // Ensure errors is always an array
      const errorMessages = response.non_field_errors || [];
      setErrors(errorMessages);
    }
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Login to your account</h1>
      </div>
      <form onSubmit={submitLogin}>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button 
            type='submit' 
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
          >
            Log In
          </button>
        </div>
        
        {errors.length > 0 && errors.map((error, index) => (
          <div 
            key={`error_${index}`} 
            className="mt-3 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" 
            role="alert"
          >
            {error}
          </div>
        ))}
      </form>
      
      <div className="mt-3 mb-3 text-center text-sm italic text-gray-400">Or</div>
      <button className="btn w-full bg-white border border-gray-300 text-gray-700 font-medium shadow-sm hover:bg-gray-100 hover:shadow-md">
        <span className="flex items-center justify-center">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google logo"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </span>
      </button>
      <div className="mt-6 text-center">
        <Link
          className="text-sm text-gray-700 underline hover:no-underline"
          href="/reset-password"
        >
          Forgot password
        </Link>
      </div>
    </>
  );
}