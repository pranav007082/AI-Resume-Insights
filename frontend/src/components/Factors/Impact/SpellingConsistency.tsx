"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface SpellingConsistencyProps{
  resume_url:string;
  spelling_consistency_score:number,
  spelling_consistency_feedback:string
}
const SpellingConsistency: React.FC<SpellingConsistencyProps> = ({
  resume_url,
  spelling_consistency_score,
  spelling_consistency_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Spelling Consistency
        <div>
          Spelling Consistency Score : {spelling_consistency_score}
        </div>
        <div>
          Spelling Consistency Feedback : {spelling_consistency_feedback}
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default SpellingConsistency;
