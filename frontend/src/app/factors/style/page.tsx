import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Style from "@/components/Factors/Style/Style";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const StylePage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Style resume_url={resume.get_pdf_url} style_score={resume.style_score} style_feedback={resume.style_feedback}/>
    </DefaultLayout>
  );
};

export default StylePage;
