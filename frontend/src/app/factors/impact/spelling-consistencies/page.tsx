import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import SpellingConsistency from "@/components/Factors/Impact/SpellingConsistency";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const SpellingConsistencyPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <SpellingConsistency resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  SpellingConsistencyPage;
