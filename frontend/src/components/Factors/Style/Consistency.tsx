"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";
interface ConsistencyProps{
  resume_url:string;
}
const Consistency: React.FC<ConsistencyProps> = ({
  resume_url
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Consistency
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default Consistency;
