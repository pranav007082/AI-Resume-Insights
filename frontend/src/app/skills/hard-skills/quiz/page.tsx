import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Quiz from "@/components/Skills/HardSkills/Quiz";


const QuizPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Quiz resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default QuizPage;
