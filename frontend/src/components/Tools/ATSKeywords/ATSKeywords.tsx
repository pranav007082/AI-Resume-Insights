"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ATSKeywordsProps {
  resume_url: string;
  job_matches:string;
}
const ATSKeywords: React.FC<ATSKeywordsProps> = ({
  resume_url,
  job_matches,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        ATS Keywords
        {job_matches}
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default ATSKeywords;
