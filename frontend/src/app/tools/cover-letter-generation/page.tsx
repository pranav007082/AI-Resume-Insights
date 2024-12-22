import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CoverLetterGeneration from "@/components/Tools/CoverLetterGeneration/CoverLetterGeneration";


const CoverLetterGenerationPage = async () => {
  const userId = await getUserId();

  // Fetch the user's resume
  const resume = await apiService.get(`/api/ats/${userId}`);

  // Check if the cover letter is empty before calling the API
  let coverLetter = resume.cover_letter;
  if (!coverLetter) {
    const coverLetterGenResponse = await apiService.get(`/api/ats/cover-letter-gen`);
    coverLetter = coverLetterGenResponse?.cover_letter; 
  }

  return (
    <DefaultLayout>
      <CoverLetterGeneration resume_url={resume.get_pdf_url} cover_letter={coverLetter} />
    </DefaultLayout>
  );
};

export default CoverLetterGenerationPage;
