"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/LandingHeader/Header";
import Footer from "@/components/Footer/Footer";
import { getUserId } from "../lib/actions";



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
