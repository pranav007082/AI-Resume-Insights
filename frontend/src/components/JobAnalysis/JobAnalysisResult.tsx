import React from 'react';

interface JobAnalysisResultProps {
  result: {
    job_description: {
      id: number;
      title: string;
      description: string;
      analysis: {
        id: number;
        similarity_score: number;
        key_skills: string[];
        missing_skills: string[];
      };
    };
    job_analysis: {
      id: number;
      similarity_score: number;
      key_skills: string[];
      missing_skills: string[];
    };
  };
}

const JobAnalysisResult: React.FC<JobAnalysisResultProps> = ({ result }) => {
  // Access the similarity score from job_analysis
  const similarityScore = result.job_analysis.similarity_score;

  if (typeof similarityScore !== 'number') {
    return <p>Error: Invalid analysis result.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Analysis Result</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Similarity Score:</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${similarityScore}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{similarityScore.toFixed(2)}% match with your resume</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Matching Skills:</h3>
        <ul className="list-disc list-inside">
          {result.job_analysis.key_skills.map((skill, index) => (
            <li key={index} className="text-sm">{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-2">Skills to Develop:</h3>
        {result.job_analysis.missing_skills.length > 0 ? (
          <ul className="list-disc list-inside">
            {result.job_analysis.missing_skills.map((skill, index) => (
              <li key={index} className="text-sm">{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm">Great job! Your resume covers all the required skills.</p>
        )}
      </div>
    </div>
  );
};

export default JobAnalysisResult;