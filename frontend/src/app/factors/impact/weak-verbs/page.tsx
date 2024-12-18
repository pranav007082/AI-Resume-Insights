import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import WeakVerbs from "@/components/Factors/Impact/WeakVerbs";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const WeakVerbsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <WeakVerbs resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  WeakVerbsPage;
