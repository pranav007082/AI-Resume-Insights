"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ImpactProps{
  resume_url:string;
  impact_score:number;
  impact_feedback:string;
}

const Impact: React.FC<ImpactProps> = ({
  resume_url,
  impact_score,
  impact_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        <h1>Impact</h1>
        <p>Impact score: {impact_score}</p>
        <p>Impact feedback: {impact_feedback}</p>

      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Impact;
