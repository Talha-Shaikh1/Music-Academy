import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonail from "@/components/Testimonail";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonail />
      <UpComingWebinars />
      <Instructors />
      
    </main>
  );
}
