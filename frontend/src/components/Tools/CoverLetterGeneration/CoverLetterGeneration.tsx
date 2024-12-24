"use client";
import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface CoverLetterGenerationProps {
  resume_url: string;
  cover_letter: string;
}

const CoverLetterGeneration: React.FC<CoverLetterGenerationProps> = ({
  resume_url,
  cover_letter
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Cover Letter Generation</h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'system-ui',
              fontSize: '1rem',
              lineHeight: '1.5',
            }}
            startDelay={100}
            cursorColor="#4F46E5"
            text={cover_letter}
            typeSpeed={50}
            hideCursorAfterText={true}
          />
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div className="flex justify-end">
        <PDFCanvas resume_url={resume_url} />
      </div>
    </div>
  );
};

export default CoverLetterGeneration;