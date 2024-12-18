import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TeamWork from "@/components/Skills/SoftSkills/Teamwork";

const TeamWorkPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <TeamWork resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  TeamWorkPage;
