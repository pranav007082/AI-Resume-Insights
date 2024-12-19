"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface UseOfBulletsProps{
  resume_url:string;
  use_of_bullets_score:number;
  use_of_bullets_feedback:string;
}

const UseOfBullets: React.FC<UseOfBulletsProps> = ({
  resume_url,
  use_of_bullets_score,
  use_of_bullets_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Use of bullets
        <div>
          Score: {use_of_bullets_score}
          Feedback: {use_of_bullets_feedback}
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default UseOfBullets;
