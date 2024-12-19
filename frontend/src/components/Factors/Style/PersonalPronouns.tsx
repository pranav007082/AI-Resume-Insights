"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface PersonalPronounsProps {
  resume_url: string;
  personal_pronouns_score:number;
  personal_pronouns_feedback:string;
}
const PersonalPronouns: React.FC<PersonalPronounsProps> = ({
  resume_url,
  personal_pronouns_score,
  personal_pronouns_feedback
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        Personal Pronouns
        <div>
          Score: {personal_pronouns_score}
          Feedback: {personal_pronouns_feedback}
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default PersonalPronouns;
