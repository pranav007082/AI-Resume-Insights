"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface RepetitionProps{
  resume_url:string;
  repetition_score:number;
  repetition_feedback:string;
}

const Repetition: React.FC<RepetitionProps> = ({
  resume_url,
  repetition_score,
  repetition_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <>
        Repetition
        <div>Repetition Score {repetition_score}</div>
        <div>Repetition Feedback {repetition_feedback}</div>
      </>
      
      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Repetition;
