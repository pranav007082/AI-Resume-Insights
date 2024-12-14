"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

const ActiveVoice: React.FC = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Active Voice
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas />
      </div>
    </div>
  );
};

export default ActiveVoice;
