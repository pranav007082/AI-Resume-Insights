import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Leadership from "@/components/Skills/SoftSkills/Leadership";

const LeadershipPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Leadership resume_url={resume.get_pdf_url} leadership_score={resume.leadership_score} leadership_feedback={resume.leadership_feedback}/>
    </DefaultLayout>
  );
};

export default  LeadershipPage;
