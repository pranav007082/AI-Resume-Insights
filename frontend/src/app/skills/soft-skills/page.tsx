import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SoftSkills from "@/components/Skills/SoftSkills/SoftSkills";


const SoftSkillsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <SoftSkills resume_url={resume.get_pdf_url} />
    </DefaultLayout>
  );
};

export default SoftSkillsPage;
