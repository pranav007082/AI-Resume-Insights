'use client';
import "../../styles/style.css";
import apiService from "@/app/services/apiService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/app/lib/actions";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitSignup = async (e: React.FormEvent) => {
    e.preventDefault(); 

    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.postWithoutToken(
      "/api/auth/register/",
      JSON.stringify(formData),
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      router.push("/resume-upload");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error.message || "An unknown error occurred"; // Assuming error.message exists
      });
      setErrors(tmpErrors);
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      <form onSubmit={submitSignup}>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-input w-full py-2"
              type="text"
              placeholder="johndoe@gmail.com"
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
              id="password1"
              name="password1"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Repeat Password
            </label>
            <input
              id="password2"
              name="password2"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button
            type="submit" // Use type="submit" instead of onClick
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
          >
            Sign up
          </button>
          {errors.map((error, index) => (
            <div
              key={`error_${index}`}
              className="mb-4 mt-3 rounded-lg bg-red-100 p-4 text-sm text-red-700"
              role="alert"
            >
              {error}
            </div>
          ))}

          <div className="text-center text-sm italic text-gray-400">Or</div>
        </div>
      </form>
      <button className="btn w-full border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-100 hover:shadow-md">
        <span className="flex items-center justify-center">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google logo"
            className="mr-2 h-5 w-5"
          />
          Continue with Google
        </span>
      </button>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to the{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
