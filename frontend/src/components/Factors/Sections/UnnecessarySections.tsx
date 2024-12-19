"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface UnnecessarySectionsProps{
  resume_url:string;
  unnecessary_sections_score: number;
  unnecessary_sections_feedback: string;
}
const UnnecessarySections: React.FC<UnnecessarySectionsProps> = ({
  resume_url,
  unnecessary_sections_score,
  unnecessary_sections_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Unnecessary Sections
        <div>
          <h1>Score: {unnecessary_sections_score}</h1>
          <h1>Feedback: {unnecessary_sections_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default UnnecessarySections;
