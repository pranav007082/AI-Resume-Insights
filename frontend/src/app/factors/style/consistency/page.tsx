import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Consistency from "@/components/Factors/Style/Consistency";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ConsistencyPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Consistency resume_url={resume.get_pdf_url} consistency_score={resume.consistency_score} consistency_feedback={resume.consistency_feedback}/>
    </DefaultLayout>
  );
};

export default  ConsistencyPage;
