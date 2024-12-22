"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";


interface ActionVerbsProps {
  resume_url: string;
}
const ActionVerbs: React.FC<ActionVerbsProps> = ({
  resume_url
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
          <h1 className="text-lg font-semibold text-gray-800">Action verbs</h1>
      </div>
    
      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default ActionVerbs;
