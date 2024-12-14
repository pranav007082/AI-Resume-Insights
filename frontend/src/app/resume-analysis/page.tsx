
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Main from "@/components/Dashboard/Main";


export const metadata = {
  title: "AI Resume Insights",
  description: "Elevate Your Resume, Unlock Your Career Potential",
  icons: {
    icon: "./favicon1.ico",
  },
};
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Main/>
      </DefaultLayout>
    </>
  );
}
