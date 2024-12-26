"use client";
import React, { useState } from "react";
import apiService from "@/app/services/apiService";

export default function JobAnalyzer() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription || !resume) {
      setError("Please provide both a job description and a resume.");
      return;
    }

    setError("");
    try {
      const formData = new FormData();
      formData.append("description", jobDescription);
      formData.append("resume", resume);

      const response = await apiService.post("/api/submit-job-description", formData);

      setResult(response);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze job description. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Analyzer</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="jobDescription" className="block font-medium">
            Job Description:
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="resume" className="block font-medium">
            Upload Resume:
          </label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
            className="block w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Analysis Result</h2>
          <p><strong>Similarity:</strong> {result.similarity_score}%</p>
          <p><strong>Key Skills:</strong> {result.key_skills.join(", ")}</p>
          <p><strong>Missing Skills:</strong> {result.missing_skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
