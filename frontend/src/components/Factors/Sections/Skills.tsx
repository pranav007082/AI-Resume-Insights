"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface SkillsProps{
  resume_url:string;
  skills_score: number;
  skills_feedback: string;
}
const Skills: React.FC<SkillsProps> = ({
  resume_url,
  skills_score,
  skills_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Skills
        <div>
          <h1>Score: {skills_score}</h1>
          <h1>Feedback: {skills_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Skills;
