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

export default function ItSupport() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="Practice Areas" subtitle="Know what we serve best" />
      <section className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-[#d39b63]">
          IT Support & Facilitation for Business Development
        </h2>
        <p className="mb-10 text-gray-700 ">
          Lawyers’ Point offers a comprehensive suite of Business Development
          Services (BDS) tailored to entrepreneurs, startups, and established
          businesses seeking legal, regulatory, and strategic support in Nepal.
          From initial registration to compliance and operational expansion, our
          professional legal and corporate team ensures your business is
          launched and managed with clarity, efficiency, and full compliance
          with Nepalese laws.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBox
            icon={<Building size={24} />}
            title="Company Registration & Affiliation"
          >
            <p>Full legal setup for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Private & Public Limited Companies</li>
              <li>Partnership & Proprietorship</li>
              <li>NGOs & Non-Profits</li>
            </ul>
            <p className="mt-2">
              Includes PAN/VAT, MOA/AOA drafting & compliance.
            </p>
          </InfoBox>

          <InfoBox icon={<Factory size={24} />} title="Industry Registration">
            <p>
              Industry registration in compliance with the Industrial
              Enterprises Act, assisting clients in:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Feasibility Reports</li>
              <li>Project Profiles</li>
              <li>License acquisition & renewals</li>
              <li>Trademark assistance</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Briefcase size={24} />}
            title="Business Registration (DoC)"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>
                {" "}
                Business registration and import-export licensing under the
                Department of Commerce, including:
              </p>
              <li>Documentation and compliance support</li>
              <li>Trade Name Registration</li>
              <li>Renewals & Govt. Documentation</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<PlaneTakeoff size={24} />}
            title=" Travel and Tour Business Registration"
          >
            <p>We manage your:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Company Setup</li>
              <li>Tourism License Application</li>
              <li>Guide License</li>
              <li>Bank Guarantee</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Globe2 size={24} />}
            title="Foreign Direct Investment (FDI)"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>
                Legal advisory and documentation services for foreign investors
                including:
              </p>
              <li>FDI Proposal Documentation</li>
              <li>NRB Compliance</li>
              <li>Reporting & Legal Advisory</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<FileText size={24} />}
            title="Proposal & Scheme Preparation"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>We prepare professionally structured:</p>
              <li>Business Proposals</li>
              <li>Feasibility Studies</li>
              <li>Project Schemes </li>
              <li>Financial Forecasts</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Calculator size={24} />}
            title="Auditing & Accounting"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>Our associated professionals provide:</p>
              <li>Statutory and internal auditing</li>
              <li>VAT, TDS, and income tax compliance</li>
              <li>Financial reporting as per Nepal Accounting Standards</li>
              <li>Liaison with the Office of the Auditor General</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<BadgeDollarSign size={24} />}
            title="PAN / VAT Registration"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>We manage:</p>
              <li>PAN and VAT registration</li>
              <li>Tax clearance support</li>
              <li>Monthly/annual tax return filing</li>
              <li>Business consultations on taxation</li>
            </ul>
          </InfoBox>

          <InfoBox icon={<Store size={24} />} title="Local Level Registration">
            <ul className="list-disc pl-6 space-y-1">
              <p>We assist in:</p>
              <li>Municipality-level registrations</li>
              <li>Tax and renewal compliance</li>
              <li>
                Licensing for small trade, food, and home-based industries
              </li>
            </ul>
          </InfoBox>
        </div>
        <p className="mt-8 text-gray-700 ">
          All the above services are executed by licensed Advocates, Chartered
          Accountants, Corporate Law Experts, and Certified Translators ensuring
          high professionalism, legal compliance, and confidentiality.
        </p>
      </section>
      <Footer />
    </main>
  );
}
