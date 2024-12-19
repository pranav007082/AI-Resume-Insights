import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import FillerWords from "@/components/Factors/Brevity/FillerWords";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const FillerWordsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <FillerWords resume_url={resume.get_pdf_url} filler_words_score={resume.filler_words_score} filler_words_feedback={resume.filler_words_feedback}/>
    </DefaultLayout>
  );
};

export default FillerWordsPage;
