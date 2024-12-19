"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface DriveProps {
  resume_url: string;
  drive_score: number;
  drive_feedback: string;
}
const Drive: React.FC<DriveProps> = ({
  resume_url,
  drive_score,
  drive_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Drive
        <div>
          <h1>Drive Score: {drive_score}</h1>
          <h2>Feedback:</h2>
          <p>{drive_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Drive;
