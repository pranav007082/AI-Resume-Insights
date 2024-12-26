'use client';

import { useSearchParams } from 'next/navigation';
import JobAnalysisResult from '@/components/JobAnalysis/JobAnalysisResult';

const JobAnalysisResultPage = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get('result');

// Decode and parse the result
  const analysisResult = result ? JSON.parse(decodeURIComponent(result)) : null;
  console.log('Analysis Result:', analysisResult);
  return (
    <div className="max-w-4xl mx-auto p-4">
      {analysisResult ? (
        <JobAnalysisResult result={analysisResult} />
      ) : (
        <p>No analysis result found.</p>
      )}
    </div>
  );
};

export default JobAnalysisResultPage;

