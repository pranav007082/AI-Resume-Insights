import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Responsibilities from "@/components/Factors/Impact/Responsibilities";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ResponsibilitiesPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Responsibilities resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  ResponsibilitiesPage;
