import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LineAnalysis from "@/components/Tools/LineAnalysis/LineAnalysis";


const LineAnalysisPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <LineAnalysis resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  LineAnalysisPage;
