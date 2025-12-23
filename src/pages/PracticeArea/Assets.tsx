import React from "react";
import {
  Building,
  Factory,
  Briefcase,
  PlaneTakeoff,
  Globe2,
  FileText,
  Calculator,
  BadgeDollarSign,
  Store,
} from "lucide-react";
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

export default function Assets() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="Practice Areas" subtitle="Know what we serve best" />
      <section className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-[#d39b63]">
          Asset Management Services
        </h2>
        <p className="mb-10 text-gray-700 ">
          At Lawyers’ Point, we offer tailored Asset Management Services to help
          businesses, institutions, and individuals efficiently manage their
          tangible and intangible assets. From legal structuring and
          documentation to valuation, compliance, and lifecycle planning, we
          provide strategic support to maximize value, minimize risk, and ensure
          full regulatory compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBox icon={<Building size={24} />} title="Assets Management">
            <p>Our services include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Documentation and structuring of movable and immovable assets
              </li>
              <li>Asset inventory preparation and compliance checks</li>
              <li>Support for asset registration, transfer, and succession</li>
              <li>Guidance on valuation, depreciation, and disclosures</li>
              <li>
                Asset management aligned with tax, investment, and governance
                needs
              </li>
            </ul>
          </InfoBox>
        </div>
        <p className="mt-8 text-gray-700 ">
          We work closely with corporate clients, public institutions, and SMEs
          to align asset strategies with long-term business goals. Whether
          you're formalizing a real estate portfolio, managing digital assets,
          or preparing for a merger or succession, our legal and strategic team
          ensures your assets are protected, optimized, and legally sound.
        </p>
        <p className="mt-8 text-gray-700 ">
          Secure your assets with clarity and compliance. Partner with Lawyers’
          Point for professional asset management services.
        </p>
      </section>
      <Footer />
    </main>
  );
}
