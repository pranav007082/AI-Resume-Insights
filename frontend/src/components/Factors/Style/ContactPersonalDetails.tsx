"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";

interface ContactPersonalDetailsProps{
  resume_url:string;
  contact_personal_details_score:number;
  contact_personal_details_feedback:string;
}
const ContactPersonalDetails: React.FC<ContactPersonalDetailsProps> = ({
  resume_url,
  contact_personal_details_score,
  contact_personal_details_feedback,
}) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left half */}
      <div>
        ContactPersonalDetails
        <div className="flex justify-between">
          <div>Score: {contact_personal_details_score}</div>
          <div>Feedback: {contact_personal_details_feedback}</div>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div  className="flex justify-end">
        <PDFCanvas resume_url={resume_url}/>
      </div>
    </div>
  );
};

export default ContactPersonalDetails;
