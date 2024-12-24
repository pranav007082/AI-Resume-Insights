"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface QuantifyImpactProps {
  resume_url: string;
  quantify_impact_score: number;
  quantify_impact_feedback: string;
}

const QuantifyImpact: React.FC<QuantifyImpactProps> = ({
  resume_url,
  quantify_impact_score,
  quantify_impact_feedback,
}) => {
  return (
    <div className="grid h-screen grid-cols-2">
      {/* Left half */}
      <div>
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Quantify Impact
        </h2>
        <p className="mb-4 mt-1 text-sm text-gray-600 dark:text-gray-400" >Increase your impact by using numbers and metrics in your bullet points</p>

        <p>Quantify Impact score: {quantify_impact_score}</p>
        <p>Quantify Impact feedback: {quantify_impact_feedback}</p>
      </div>

      {/* Right half - PDFCanvas */}
      <div className="flex justify-end overflow-hidden w-full h-full">
        <PDFCanvas resume_url={resume_url} />
      </div>
    </div>
  );
};

export default QuantifyImpact;
