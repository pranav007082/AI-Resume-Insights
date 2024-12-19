"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ActiveVoiceProps{
  resume_url:string;
  active_voice_score:number;
  active_voice_feedback:string;
}
const ActiveVoice: React.FC<ActiveVoiceProps> = ({
  resume_url,
  active_voice_score,
  active_voice_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Active Voice
        <div>
          <div>Score: {active_voice_score}</div>
          <div>Feedback: {active_voice_feedback}</div>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default ActiveVoice;
