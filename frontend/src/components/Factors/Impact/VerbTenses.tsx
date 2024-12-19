"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface VerbTensesProps{
  resume_url:string;
  verb_tenses_score:number;
  verb_tenses_feedback:string;
}

const VerbTenses: React.FC<VerbTensesProps> = ({
  resume_url,
  verb_tenses_score,
  verb_tenses_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Verb tenses
        <div>
          Score: {verb_tenses_score}
        </div>
        <div>
          Feedback: {verb_tenses_feedback}
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default VerbTenses;
