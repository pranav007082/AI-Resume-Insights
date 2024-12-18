import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Buzzwords from "@/components/Factors/Style/Buzzwords";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const BuzzwordsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Buzzwords resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  BuzzwordsPage;
