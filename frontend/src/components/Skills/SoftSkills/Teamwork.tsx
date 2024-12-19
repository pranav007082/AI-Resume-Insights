"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface TeamWorkProps{
  resume_url:string;
  teamwork_score:number;
  teamwork_feedback:string;
}
const TeamWork: React.FC<TeamWorkProps> = ({
  resume_url,
  teamwork_score,
  teamwork_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Team Work
        <div>
          <h1>Team Work Score: {teamwork_score}</h1>
          <h2>Feedback:</h2>
          <p>{teamwork_feedback}</p>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default TeamWork;
