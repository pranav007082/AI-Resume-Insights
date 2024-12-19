import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Education from "@/components/Factors/Sections/Education";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const EducationPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Education resume_url={resume.get_pdf_url} education_score={resume.education_score} education_feedback={resume.education_feedback}/>
    </DefaultLayout>
  );
};

export default  EducationPage;
