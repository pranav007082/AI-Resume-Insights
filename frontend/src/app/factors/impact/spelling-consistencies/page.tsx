import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import SpellingConsistency from "@/components/Factors/Impact/SpellingConsistency";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const SpellingConsistencyPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <SpellingConsistency resume_url={resume.get_pdf_url} spelling_consistency_score={resume.spelling_and_consistency_score} spelling_consistency_feedback={resume.spelling_and_consistency_feedback}/>
    </DefaultLayout>
  );
};

export default  SpellingConsistencyPage;
