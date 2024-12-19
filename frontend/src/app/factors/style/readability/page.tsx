import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Readability from "@/components/Factors/Style/Readability";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ReadabilityPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Readability resume_url={resume.get_pdf_url} readability_score={resume.readability_score} readability_feedback={resume.readability_feedback}/>
    </DefaultLayout>
  );
};

export default  ReadabilityPage;
