import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import QuantifyImpact from "@/components/Factors/Impact/QuanitfyImpact";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const QuantifyImpactPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <QuantifyImpact resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default  QuantifyImpactPage;
