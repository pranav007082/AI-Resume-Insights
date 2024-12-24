"use client";

import React from "react";
import PDFCanvas from "@/components/PDFCanvas/PDFCanvas";
import VerbCard from "@/components/Resources/ActionVerbs/VerbCard";

interface ActionVerbsProps {
  resume_url: string;
}
const ActionVerbs: React.FC<ActionVerbsProps> = ({ resume_url }) => {
  // Strong Accomplishment-driven Verbs
  const strongAccomplishmentVerbs = [
    "Accelerated",
    "Achieved",
    "Attained",
    "Completed",
    "Conceived",
    "Convinced",
    "Discovered",
    "Doubled",
    "Effected",
    "Eliminated",
    "Expanded",
    "Expedited",
    "Founded",
    "Improved",
    "Increased",
    "Initiated",
    "Innovated",
    "Introduced",
    "Invented",
    "Launched",
    "Mastered",
    "Overcame",
    "Overhauled",
    "Pioneered",
    "Reduced",
    "Resolved",
    "Revitalized",
    "Spearheaded",
    "Strengthened",
    "Transformed",
    "Upgraded",
    "Tripled",
  ];

  // Communication Skills
  const communicationSkills = [
    "Addressed",
    "Advised",
    "Arranged",
    "Authored",
    "Co-authored",
    "Co-ordinated",
    "Communicated",
    "Corresponded",
    "Counselled",
    "Developed",
    "Demonstrated",
    "Directed",
    "Drafted",
    "Enlisted",
    "Facilitated",
    "Formulated",
    "Guided",
    "Influenced",
    "Interpreted",
    "Interviewed",
    "Instructed",
    "Lectured",
    "Led",
    "Liaised",
    "Mediated",
    "Moderated",
    "Motivated",
    "Negotiated",
    "Persuaded",
    "Presented",
    "Promoted",
    "Proposed",
    "Publicized",
    "Recommended",
    "Reconciled",
    "Recruited",
    "Resolved",
    "Taught",
    "Trained",
    "Translated",
  ];

  // Entrepreneurial Skills
  const entrepreneurialSkills = [
    "Composed",
    "Conceived",
    "Created",
    "Designed",
    "Developed",
    "Devised",
    "Established",
    "Founded",
    "Generated",
    "Implemented",
    "Initiated",
    "Instituted",
    "Introduced",
    "Launched",
    "Led",
    "Opened",
    "Originated",
    "Pioneered",
    "Planned",
    "Prepared",
    "Produced",
    "Promoted",
    "Started",
    "Released",
  ];

  // Management Skills
  const managementSkills = [
    "Administered",
    "Analyzed",
    "Assigned",
    "Chaired",
    "Consolidated",
    "Contracted",
    "Co-ordinated",
    "Delegated",
    "Developed",
    "Directed",
    "Evaluated",
    "Executed",
    "Organized",
    "Planned",
    "Prioritized",
    "Produced",
    "Recommended",
    "Reorganized",
    "Reviewed",
    "Scheduled",
    "Supervised",
    "Managed",
    "Guided",
  ];

  // Leadership, Mentorship and Teaching Skills
  const leadershipSkills = [
    "Advised",
    "Coached",
    "Conducted",
    "Directed",
    "Guided",
    "Demonstrated",
    "Illustrated",
    "Led",
    "Managed",
    "Organized",
    "Performed",
    "Presented",
    "Taught",
    "Trained",
    "Mentored",
    "Spearheaded",
    "Authored",
    "Accelerated",
    "Achieved",
    "Allocated",
    "Completed",
    "Awarded",
    "Persuaded",
    "Revamped",
    "Influenced",
    "Assessed",
    "Clarified",
    "Counseled",
    "Diagnosed",
    "Educated",
    "Facilitated",
    "Familiarized",
    "Motivated",
    "Referred",
    "Rehabilitated",
    "Reinforced",
    "Represented",
    "Moderated",
    "Verified",
    "Adapted",
    "Coordinated",
    "Developed",
    "Enabled",
    "Encouraged",
    "Evaluated",
    "Explained",
    "Informed",
    "Instructed",
    "Lectured",
    "Stimulated",
  ];

  // Research and Analysis Skills
  const researchAnalysisSkills = [
    "Analyzed",
    "Assessed",
    "Classified",
    "Collated",
    "Defined",
    "Devised",
    "Established",
    "Evaluated",
    "Forecasted",
    "Identified",
    "Interviewed",
    "Investigated",
    "Researched",
    "Tested",
    "Traced",
    "Designed",
    "Interpreted",
    "Verified",
    "Uncovered",
    "Clarified",
    "Collected",
    "Critiqued",
    "Diagnosed",
    "Examined",
    "Extracted",
    "Inspected",
    "Inspired",
    "Organized",
    "Reviewed",
    "Summarized",
    "Surveyed",
    "Systemized",
  ];

  // Problem Solving Skills
  const problemSolvingSkills = [
    "Arranged",
    "Budgeted",
    "Composed",
    "Conceived",
    "Conducted",
    "Controlled",
    "Co-ordinated",
    "Eliminated",
    "Improved",
    "Investigated",
    "Itemised",
    "Modernised",
    "Operated",
    "Organised",
    "Planned",
    "Prepared",
    "Processed",
    "Produced",
    "Redesigned",
    "Reduced",
    "Refined",
    "Researched",
    "Resolved",
    "Reviewed",
    "Revised",
    "Scheduled",
    "Simplified",
    "Solved",
    "Streamlined",
    "Transformed",
    "Examined",
    "Revamped",
  ];

  // Process Improvement, Consulting and Operations
  const processImprovementSkills = [
    "Combined",
    "Consolidated",
    "Converted",
    "Cut",
    "Decreased",
    "Developed",
    "Devised",
    "Doubled",
    "Tripled",
    "Eliminated",
    "Expanded",
    "Improved",
    "Increased",
    "Innovated",
    "Minimised",
    "Modernised",
    "Recommended",
    "Redesigned",
    "Reduced",
    "Refined",
    "Reorganised",
    "Resolved",
    "Restructured",
    "Revised",
    "Saved",
    "Serviced",
    "Simplified",
    "Solved",
    "Streamlined",
    "Strengthened",
    "Transformed",
    "Trimmed",
    "Unified",
    "Widened",
    "Broadened",
    "Revamped",
  ];

  // Financial Skills
  const financialSkills = [
    "Administered",
    "Allocated",
    "Analyzed",
    "Appraised",
    "Audited",
    "Balanced",
    "Budgeted",
    "Calculated",
    "Computed",
    "Developed",
    "Managed",
    "Planned",
    "Projected",
    "Researched",
    "Restructured",
    "Modelled",
    "Arbitrated",
  ];

  // Design and Creative Skills
  const designCreativeSkills = [
    "Acted",
    "Conceptualized",
    "Created",
    "Customized",
    "Designed",
    "Developed",
    "Directed",
    "Redesigned",
    "Established",
    "Fashioned",
    "Illustrated",
    "Instituted",
    "Integrated",
    "Performed",
    "Planned",
    "Proved",
    "Revised",
    "Revitalized",
    "Set up",
    "Shaped",
    "Streamlined",
    "Structured",
    "Tabulated",
    "Validated",
  ];

  // Clerical or Detail-oriented Skills
  const clericalSkills = [
    "Approved",
    "Arranged",
    "Catalogued",
    "Classified",
    "Collected",
    "Compiled",
    "Dispatched",
    "Executed",
    "Generated",
    "Implemented",
    "Inspected",
    "Monitored",
    "Operated",
    "Ordered",
    "Organized",
    "Prepared",
    "Processed",
    "Purchased",
    "Recorded",
    "Retrieved",
    "Screened",
    "Specified",
    "Systematized",
  ];

  // Engineering / Technical Roles
  const engineeringSkills = [
    "Conceptualized",
    "Coded",
    "Computed",
    "Extrapolated",
    "Predicted",
    "Installed",
    "Engineered",
    "Calculated",
    "Segmented",
    "Restructured",
    "Arbitrated",
    "Estimated",
    "Overhauled",
    "Devised",
    "Assembled",
    "Unified",
    "Visualized",
    "Debugged",
    "Customized",
    "Standardized",
    "Steered",
    "Validated",
    "Diagnosed",
    "Tested",
    "Automated",
    "Strengthened",
    "Troubleshooted",
    "Architected",
    "Discovered",
    "Deployed",
  ];

  return (
    <div className="grid h-screen grid-cols-2">
      {/* Left half */}
      <div className="overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {/* Heading Section */}
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Action Verbs
          </h2>
          <p className="mb-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
            Curated by hiring managers at top companies, these action words will
            ensure your bullet points stand out
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center pr-5.5 ">
          <VerbCard title={"Strong Accomplishment- Driven Verbs"} verbs={strongAccomplishmentVerbs}/>
          <VerbCard title={"Communication Skills"} verbs={communicationSkills}/>
          <VerbCard title={"Entrepreneurial Skills"} verbs={entrepreneurialSkills}/>
          <VerbCard title={"Management Skills"} verbs={managementSkills}/>
          <VerbCard title={"Leadership, Mentorship and Teaching Skills"} verbs={leadershipSkills}/>
          <VerbCard title={"Research and Analysis Skills"} verbs={researchAnalysisSkills}/>
          <VerbCard title={"Problem Solving Skills"} verbs={problemSolvingSkills}/>
          <VerbCard title={"Process Improvement, Consulting and Operations"} verbs={processImprovementSkills}/>
          <VerbCard title={"Financial Skills"} verbs={financialSkills}/>
          <VerbCard title={"Design and Creative Skills"} verbs={designCreativeSkills}/>
          <VerbCard title={"Clerical or Detail-oriented Skills"} verbs={clericalSkills}/>
          <VerbCard title={"Engineering / Technical Roless"} verbs={engineeringSkills}/>
        </div>
      </div>

      {/* Right half - PDFCanvas */}
      <div className="sticky top-0 flex justify-end p-4">
        <PDFCanvas resume_url={resume_url} />
      </div>
    </div>
  );
};

export default ActionVerbs;
