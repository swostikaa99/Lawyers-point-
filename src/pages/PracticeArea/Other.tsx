import React from "react";
import { Building } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import PageHeader from "@/components/PageHeader";

function InfoBox({ title, children, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#d39b63]">{icon}</span>
        <h3 className="text-lg font-semibold text-[#23283a]">{title}</h3>
      </div>

      <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function Other() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="Practice Areas" subtitle="Know what we serve best" />
      <section className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-[#d39b63]">
          Other Professional Translation Services
        </h2>
        <p className="mb-10 text-gray-700 ">
          Expert Legal Translation Services Ensuring Accuracy, Confidentiality,
          and Compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBox
            icon={<Building size={24} />}
            title="Other Translation Services"
          >
            <p>We also provide non-certified, high-quality translations for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Books and Journal Articles (academic, legal, literary, and
                development-focused)
              </li>
              <li>Reports, Manuals, and Training Materials</li>
              <li>Corporate and Institutional Documents</li>
            </ul>
          </InfoBox>
        </div>
        <p className="mt-8 text-gray-700 ">
          All translations are carried out by skilled bilingual translators with
          subject-matter expertise, ensuring accurate meaning, tone, and
          terminology.
        </p>
        <p className="mt-8 text-gray-700 ">
          Whether for official, academic, or professional use, Lawyers’ Point is
          your trusted partner for credible translation and certification
          services in Nepal.
        </p>
      </section>
      <Footer />
    </main>
  );
}
