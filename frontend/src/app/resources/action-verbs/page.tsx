import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ActionVerbs from "@/components/Resources/ActionVerbs/ActionVerbs";


const ActionVerbsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <ActionVerbs resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  ActionVerbsPage;
