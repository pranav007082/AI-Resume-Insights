"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface EducationProps {
  resume_url: string;
  education_score: number;
  education_feedback: string;
}
const Education: React.FC<EducationProps> = ({
  resume_url,
  education_score,
  education_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Education
        <div>
          <p>Score: {education_score}</p>
          <p>Feedback: {education_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Education;
