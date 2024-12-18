import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Skills from "@/components/Factors/Sections/Skills";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const SkillsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Skills resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  SkillsPage;
