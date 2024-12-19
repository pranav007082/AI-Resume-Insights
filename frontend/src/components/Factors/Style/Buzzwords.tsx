"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface BuzzwordsProps{
  resume_url:string;
  buzzwords_score:number;
  buzzwords_feedback:string;
}
const Buzzwords: React.FC<BuzzwordsProps> = ({
  resume_url,
  buzzwords_score,
  buzzwords_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Buzzwords
        <div>Score: {buzzwords_score}</div>
        <div>Feedback: {buzzwords_feedback}</div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Buzzwords;
