import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import ActiveVoice from "@/components/Factors/Style/ActiveVoice";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ActiveVoicePage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <ActiveVoice resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  ActiveVoicePage;
