"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface PageDensityProps{
  resume_url:string;
  page_density_score:number;
  page_density_feedback:string;
}

const PageDensity: React.FC<PageDensityProps> = ({
  resume_url,
  page_density_score,
  page_density_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Page Density
        <div>
          <h1>{page_density_score}</h1>
          <p>{page_density_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default PageDensity;
