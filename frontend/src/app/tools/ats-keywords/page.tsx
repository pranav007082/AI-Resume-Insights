import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ATSKeywords from "@/components/Tools/ATSKeywords/ATSKeywords";


const ATSKeywordsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <ATSKeywords resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  ATSKeywordsPage;
