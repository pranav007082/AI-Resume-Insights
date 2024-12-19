import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Repetition from "@/components/Factors/Impact/Repetition";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const RepetitionPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Repetition resume_url={resume.get_pdf_url} repetition_score={resume.repetition_score} repetition_feedback={resume.repetition_feedback}/>
    </DefaultLayout>
  );
};

export default  RepetitionPage;
