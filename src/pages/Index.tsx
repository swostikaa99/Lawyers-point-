import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Practice from "@/components/Practise";
import Blog from "./Blog";
import BlogConp from "@/components/BlogConp";
import Testimonials from "./TEstimonail";
import Impacts from "./Impact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <InfoCards />
      <AboutSection />
      <div>
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold inline-block text-black relative">
            Our Practice Areas
            <div className="absolute left-0 -bottom-2 w-24 h-1 bg-[#d39b63] rounded-md" />
          </h2>
          <p className="mt-8 text-gray-600">
            Comprehensive legal services tailored to your needs
          </p>
        </div>
        <Practice itemsPerPage={4} showPagination={false} showLink={true} />
      </div>
      <div>
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold inline-block text-black relative">
            Our Blogs
            <div className="absolute left-0 -bottom-2 w-20 h-1 bg-[#d39b63] rounded-md" />
          </h2>
          <p className="mt-8 text-gray-600">
            Legal insights, news, and updates from our team
          </p>
        </div>

        <BlogConp itemsPerPage={3} showPagination={false} showLink={true} />
      </div>
      <Impacts />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
