import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Brevity from "@/components/Factors/Brevity/Brevity";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const BrevityPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Brevity resume_url={resume.get_pdf_url} />
    </DefaultLayout>
  );
};

export default BrevityPage;
