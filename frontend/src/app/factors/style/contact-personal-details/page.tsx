import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import ContactPersonalDetails from "@/components/Factors/Style/ContactPersonalDetails";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const ContactPersonalDetailsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <ContactPersonalDetails resume_url={resume.get_pdf_url} contact_personal_details_score={resume.contact_and_personal_details_score} contact_personal_details_feedback={resume.contact_and_personal_details_feedback}/>
    </DefaultLayout>
  );
};

export default  ContactPersonalDetailsPage;
