"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface CoverLetterGenerationProps{
  resume_url:string;
  cover_letter:string;
}
const CoverLetterGeneration: React.FC<CoverLetterGenerationProps> = ({
  resume_url,
  cover_letter
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Cover Letter Generation
        {cover_letter}
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default CoverLetterGeneration;
