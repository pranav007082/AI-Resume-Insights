"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface CommunicationProps {
  resume_url: string;
  communication_score:number;
  communication_feedback:string;
}

const Communication: React.FC<CommunicationProps> = ({
  resume_url,
  communication_score,
  communication_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Communication
        <div>
          <h1>Score: {communication_score}</h1>
          <h1>Feedback: {communication_feedback}</h1>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Communication;
