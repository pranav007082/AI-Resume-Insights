"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface LeadershipProps{
  resume_url:string;
  leadership_score:number;
  leadership_feedback:string;
}
const Leadership: React.FC<LeadershipProps> = ({
  resume_url,
  leadership_score,
  leadership_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Leadership
        <div>
          <h1>Leadership Score: {leadership_score}</h1>
          <h2>Feedback:</h2>
          <p>{leadership_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Leadership;
