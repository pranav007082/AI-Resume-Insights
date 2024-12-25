"use client";
import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface CoverLetterGenerationProps {
  resume_url: string;
  cover_letter: string;
}

const CoverLetterGeneration: React.FC<CoverLetterGenerationProps> = ({
  resume_url,
  cover_letter
}) => {
  // Split the cover letter into paragraphs
  const paragraphs = cover_letter.split('\n');

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Cover Letter Generation</h2>
        <div
          className="bg-white rounded-lg p-6 shadow-md h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide"
        >
          <div className="whitespace-pre-line font-sans text-base leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="mb-4">
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div className="sticky top-0 flex justify-end p-4 overflow-hidden w-full h-full">
        <PDFCanvas resume_url={resume_url} />
      </div>
    </div>
  );
};

export default CoverLetterGeneration;
