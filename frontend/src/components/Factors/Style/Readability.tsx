"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ReadabilityProps{
  resume_url:string;
  readability_score:number;
  readability_feedback:string;
}
const Readability: React.FC<ReadabilityProps> = ({
  resume_url,
  readability_score,
  readability_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Readability
        <div>
          <h1>Readability Score: {readability_score}</h1>
          <p>{readability_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Readability;
