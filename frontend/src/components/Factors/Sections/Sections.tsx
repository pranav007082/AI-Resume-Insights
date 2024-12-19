"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface SectionsProps{
  resume_url:string;
  sections_score:number;
  sections_feedback:string;
}
const Sections: React.FC<SectionsProps> = ({
  resume_url,
  sections_score,
  sections_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        <h1>Sections</h1>
        <h2>Score: {sections_score}</h2>
        <p>Feedback: {sections_feedback}</p>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Sections;
