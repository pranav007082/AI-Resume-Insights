"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface BulletLengthsProps{
  resume_url:string;
  bullet_lengths_score:number;
  bullet_lengths_feedback:string;
}

const BulletLengths: React.FC<BulletLengthsProps> = ({
  resume_url,
  bullet_lengths_score,
  bullet_lengths_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        <h1>BulletLengths</h1>
        <h2>Score: {bullet_lengths_score}</h2>
        <p>Feedback: {bullet_lengths_feedback}</p>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default BulletLengths;
