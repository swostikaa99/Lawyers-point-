import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Practice from "@/components/Practise";

const PracticeAreas = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader
        title="Practice Areas"
        subtitle="Comprehensive legal services tailored to your needs"
      />
      <Practice itemsPerPage={8} showPagination={true} showLink={false} />

      <Footer />
    </main>
  );
};

export default PracticeAreas;
