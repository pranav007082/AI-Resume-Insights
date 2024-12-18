
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Main from "@/components/Dashboard/Main";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

export const metadata = {
  title: "AI Resume Insights",
  description: "Elevate Your Resume, Unlock Your Career Potential",
  icons: {
    icon: "./favicon1.ico",
  },
};

const HomePage = async({params}:{params:{id:string}})=>{
  const userId=getUserId();
  const resume=await apiService.get(`/api/ats/${params.id}`)
  console.log("URL",resume.get_pdf_url)
  return (
    <>
      <DefaultLayout>
        <Main resume_url={resume.get_pdf_url}/>
      </DefaultLayout>
    </>
  );
}

export default HomePage;