'use client';

import { useState } from 'react';
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import JobAnalysisResult from "@/components/JobAnalysis/JobAnalysisResult";
import { useRouter } from 'next/navigation';

const JobAnalyzerPage = () => {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setAnalysisResult(null);

    try {
        const userId = await getUserId();
        console.log('User ID:', userId);
        const response = await apiService.post('/api/ats/submit-job-description/', {
          title: jobTitle,
          description: jobDescription,
          user_id: userId
        });
      
        console.log('Response:', response);
      
        if (response.success) {
            const url = new URL('/tools/job-analysis-result', window.location.origin);
            url.searchParams.append('result', encodeURIComponent(JSON.stringify(response.data)));
            router.push(url.toString());
        } else {
            console.error('API Error:', response.message);
            setError(response.message || 'An error occurred');
        }
      } catch (err) {
        console.error('Request Failed:', err);
        setError('Sorry !Failed to analyze job description. Please try again.');
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Job Description Analyzer</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block mb-2 font-medium">Job Title:</label>
            <input
              id="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobDescription" className="block mb-2 font-medium">Job Description:</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-2 border rounded"
              rows={10}
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Analyze Job Description'}
          </button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {analysisResult && <JobAnalysisResult result={analysisResult} />}
      </div>
    </DefaultLayout>
  );
};

export default JobAnalyzerPage;
