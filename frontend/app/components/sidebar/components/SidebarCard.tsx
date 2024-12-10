'use client';
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg"
export default function Logo() {
  const scrollToTop = (e:any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link href="/" onClick={scrollToTop} className="inline-flex " aria-label="ISTE">
      <Image
        src={logo}
        alt="AI Resume Insights Logo"
        width={200}
        height={200}
      />
    </Link>
  );
}

