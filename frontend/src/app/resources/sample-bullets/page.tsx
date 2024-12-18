import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SampleBullets from "@/components/Resources/SampleBullets/SampleBullets";


const SampleBulletsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <SampleBullets resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  SampleBulletsPage;
