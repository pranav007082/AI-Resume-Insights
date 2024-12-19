import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Analytical from "@/components/Skills/SoftSkills/Analytical";


const AnalyticalPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Analytical resume_url={resume.get_pdf_url} analytical_score={resume.analytical_score} analytical_feedback={resume.analytical_feedback}/>
    </DefaultLayout>
  );
};

export default  AnalyticalPage;
