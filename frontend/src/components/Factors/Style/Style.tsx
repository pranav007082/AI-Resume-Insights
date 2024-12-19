"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface StyleProps {
  resume_url: string;
  style_score: number;
  style_feedback: string;
}
const Style: React.FC<StyleProps> = ({
  resume_url,
  style_score,
  style_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        <h1>Style</h1>
        <div>
          <h1>Style Score: {style_score}</h1>
          <p>{style_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Style;
