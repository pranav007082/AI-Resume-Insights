"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ResponsibilitiesProps{
  resume_url:string;
  responsibilities_score:number;
  responsibilities_feedback:string;
}

const Responsibilities: React.FC<ResponsibilitiesProps> = ({
  resume_url,
  responsibilities_score,
  responsibilities_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Responsibilities
        <div>Responsibilities Score {responsibilities_score}</div>
        <div>Responsibilities Feedback {responsibilities_feedback}</div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Responsibilities;
