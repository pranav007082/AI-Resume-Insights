"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface DatesProps {
  resume_url: string;
  dates_score:number;
  dates_feedback:string;
}
const Dates: React.FC<DatesProps> = ({
  resume_url,
  dates_score,
  dates_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Dates
        <div>
          <h1>Score: {dates_score}</h1>
          <h1>Feedback: {dates_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Dates;
