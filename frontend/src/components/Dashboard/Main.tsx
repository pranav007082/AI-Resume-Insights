"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface MainProps{
  resume_url:string;
  overall_score:number;
  overall_feedback:string;
}

const Main: React.FC<MainProps> = ({
  resume_url,
  overall_score,
  overall_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
          <h1>Overall</h1>
          <h2>Score: {overall_score}</h2>
          <h3>Feedback: {overall_feedback}</h3>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Main;
