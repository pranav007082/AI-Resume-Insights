import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import PageDensity from "@/components/Factors/Brevity/PageDensity";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const PageDensityPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <PageDensity resume_url={resume.get_pdf_url}/>
    </DefaultLayout>
  );
};

export default PageDensityPage;
