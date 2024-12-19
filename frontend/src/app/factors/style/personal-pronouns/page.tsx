import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import PersonalPronouns from "@/components/Factors/Style/PersonalPronouns";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const PersonalPronounsPage = async () => {
  const userId=await getUserId();
  const resume=await apiService.get(`/api/ats/${userId}`)
  return (
    <DefaultLayout>
      <PersonalPronouns resume_url={resume.get_pdf_url} personal_pronouns_score={resume.personal_pronouns_score} personal_pronouns_feedback={resume.personal_pronouns_feedback}/>
    </DefaultLayout>
  );
};

export default  PersonalPronounsPage;
