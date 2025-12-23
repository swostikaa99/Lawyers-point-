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

export default function Corporate() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="Practice Areas" subtitle="Know what we serve best" />
      <section className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-[#d39b63]">
          Corporate Management Services
        </h2>
        <p className="mb-10 text-gray-700 ">
          Lawyers’ Point provides end-to-end Corporate Management Services to
          businesses, non-profits, and institutions seeking legal, structural,
          and compliance-based support throughout their corporate journey. From
          company formation to restructuring, annual compliance, and regulatory
          coordination, our licensed legal experts and corporate professionals
          ensure that your business operates with full legal backing and
          efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBox
            icon={<Building size={24} />}
            title="Company Formation and Registration"
          >
            <p>We assist in registering:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Private Limited Companies</li>
              <li>Partnership & Proprietorship</li>
              <li>NGOs & Non-Profits</li>
              <li>Partnerships and Proprietorships</li>
            </ul>
            <p className="mt-2">
              Includes PAN/VAT, MOA/AOA drafting & compliance.Name reservation
              and registration with the Office of the Company Registrar. Bank
              account opening support and legal documentation
            </p>
          </InfoBox>

          <InfoBox
            icon={<Factory size={24} />}
            title="Annual Legal Compliance and Company Updates"
          >
            <p>We manage all mandatory corporate obligations including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Annual Return Filing</li>
              <li>Audit and Tax Filing Coordination</li>
              <li>Conducting and documenting (AGM) (SAGM)</li>
              <li>Updating shareholding structure</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Briefcase size={24} />}
            title="Company Restructuring & Status Changes"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>
                {" "}
                Whether you're expanding, merging, or restructuring, we
                facilitate:
              </p>
              <li>Conversion from Private to Public Company and vice versa</li>
              <li>Transition from Profit to Non-Profit status</li>
              <li>Business mergers, acquisitions, and liquidation support</li>
              <li>
                Legal opinion and documentation for inter-company agreements
              </li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<PlaneTakeoff size={24} />}
            title=" Documentation and Secretarial Support"
          >
            <p>Our experts prepare and review:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Resolutions, board minutes, and regulatory filings</li>
              <li>Share certificates and amendments to MOA & AOA</li>
              <li>
                Meeting notices, shareholder communications, and compliance
                reports
              </li>
              <li>Contracts, leases, licenses, and other legal documents</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Globe2 size={24} />}
            title="Regulatory Compliance with Authorities"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>
                We offer coordination, registration, and compliance services
                for:
              </p>
              <li>Department of Industry</li>
              <li>Department of Commerce </li>
              <li>Department of Tourism</li>
              <li>Local Municipalities and Rural Municipalities</li>
            </ul>
          </InfoBox>
        </div>
      </section>
      <Footer />
    </main>
  );
}
