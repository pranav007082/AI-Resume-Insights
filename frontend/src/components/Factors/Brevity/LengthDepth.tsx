"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface LengthDepthProps{
  resume_url:string;
  length_depth_score:number;
  length_depth_feedback:string;
}

const LengthDepth: React.FC<LengthDepthProps> = ({
  resume_url,
  length_depth_score,
  length_depth_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Lenght Depth
        <div>
          <h1>Score: {length_depth_score}</h1>
          <h1>Feedback: {length_depth_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default LengthDepth;
