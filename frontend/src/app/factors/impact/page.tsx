import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Impact from "@/components/Factors/Impact/Impact";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ImpactPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Impact resume_url={resume.get_pdf_url} />
    </DefaultLayout>
  );
};

export default ImpactPage;
