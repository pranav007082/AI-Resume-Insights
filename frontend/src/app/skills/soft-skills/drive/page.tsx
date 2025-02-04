import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Drive from "@/components/Skills/SoftSkills/Drive";

const DrivePage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <Drive resume_url={resume.get_pdf_url} drive_score={resume.drive_score} drive_feedback={resume.drive_feedback}/>
    </DefaultLayout>
  );
};

export default  DrivePage;