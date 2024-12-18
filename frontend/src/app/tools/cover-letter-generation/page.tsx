import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CoverLetterGeneration from "@/components/Tools/CoverLetterGeneration/CoverLetterGeneration";


const CoverLetterGenerationPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <CoverLetterGeneration resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  CoverLetterGenerationPage;
