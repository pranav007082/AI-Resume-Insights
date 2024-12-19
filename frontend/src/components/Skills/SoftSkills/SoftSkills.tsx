"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface SoftSkillsProps {
  resume_url: string;
  soft_skills_score: number;
  soft_skills_feedback: string;
}
const SoftSkills: React.FC<SoftSkillsProps> = ({
  resume_url,
  soft_skills_score,
  soft_skills_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Soft Skills
        <div>
          <h1>Score: {soft_skills_score}</h1>
          <p>Feedback: {soft_skills_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default SoftSkills;
