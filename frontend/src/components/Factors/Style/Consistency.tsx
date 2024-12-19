"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";
interface ConsistencyProps{
  resume_url:string;
  consistency_score:number;
  consistency_feedback:string;
}

const Consistency: React.FC<ConsistencyProps> = ({
  resume_url,
  consistency_score,
  consistency_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Consistency
        <div>
          <h1>Score: {consistency_score}</h1>
          <h1>Feedback: {consistency_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Consistency;
