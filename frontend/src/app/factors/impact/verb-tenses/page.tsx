import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import VerbTenses from "@/components/Factors/Impact/VerbTenses";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const VerbTensesPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <VerbTenses resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  VerbTensesPage;
