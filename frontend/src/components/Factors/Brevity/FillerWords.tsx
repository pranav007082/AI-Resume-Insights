"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface FillerWordsProps{
  resume_url:string;
  filler_words_score:number;
  filler_words_feedback:string;
}

const FillerWords: React.FC<FillerWordsProps> = ({
  resume_url,
  filler_words_score,
  filler_words_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Filler Words
        <div>
          Score: {filler_words_score}
        </div>
        <div>
          Feedback: {filler_words_feedback}
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default FillerWords;
