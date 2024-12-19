"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface BrevityProps{
  resume_url:string;
  brevity_score:number;
  brevity_feedback:string;
}

const Brevity: React.FC<BrevityProps> = ({
  resume_url,
  brevity_score,
  brevity_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        <h1>Brevity</h1>
        <h2>Score: {brevity_score}</h2>
        <p>Feedback: {brevity_feedback}</p>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Brevity;
