import Hero from "../components/Hero";
import BusinessCategories from "../components/Companies";
import FeaturesPlanet from "../components/Features";
import LargeTestimonial from "../components/Testimonials";
import Cta from "../components/PreFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
