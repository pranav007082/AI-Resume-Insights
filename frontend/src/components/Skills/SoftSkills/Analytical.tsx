"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface AnalyticalProps {
  resume_url: string;
  analytical_score:number;
  analytical_feedback:string;
}
const Analytical: React.FC<AnalyticalProps> = ({
  resume_url,
  analytical_score,
  analytical_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Analytical
        <div>
          <h1>Score: {analytical_score}</h1>
          <h1>Feedback: {analytical_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Analytical;
