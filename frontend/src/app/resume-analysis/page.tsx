import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
