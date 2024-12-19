import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Skills from "@/components/Factors/Sections/Skills";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const SkillsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Skills resume_url={resume.get_pdf_url} skills_score={resume.skills_score} skills_feedback={resume.skills_feedback}/>
    </DefaultLayout>
  );
};

export default  SkillsPage;
