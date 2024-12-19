import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Communication from "@/components/Skills/SoftSkills/Communication";


const CommunicationPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Communication resume_url={resume.get_pdf_url} communication_score={resume.communication_score} communication_feedback={resume.communication_feedback}/>
    </DefaultLayout>
  );
};

export default CommunicationPage;
