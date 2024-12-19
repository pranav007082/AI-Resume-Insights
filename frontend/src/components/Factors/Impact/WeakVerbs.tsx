"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface WeakVerbsProps{
  resume_url:string;
  weak_verbs_score:number;
  weak_verbs_feedback:string;
}

const WeakVerbs: React.FC<WeakVerbsProps> = ({
  resume_url,
  weak_verbs_score,
  weak_verbs_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Weak Verbs
        <div>
          <span>Score: {weak_verbs_score}</span>
          <span>Feedback: {weak_verbs_feedback}</span>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default WeakVerbs;
