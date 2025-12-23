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

export default function PracticeAreas() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="Practice Areas" subtitle="Know what we serve best" />
      <section className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-[#d39b63]">
          Litigation Services
        </h2>
        <p className="mb-10 text-gray-700 ">
          At Lawyers’ Point, we offer expert Litigation Services covering all
          tiers of Nepal’s judicial system—from District Courts to the High
          Courts and Supreme Court of Nepal. Our seasoned legal professionals
          bring decades of courtroom experience and legal acumen, ensuring
          effective representation, precision in drafting, and strategic case
          handling. Whether you are seeking to file a case, respond to a claim,
          or defend your rights, our litigation team is equipped to provide
          client-centered, result-oriented legal support across civil, criminal,
          administrative, and commercial matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoBox
            icon={<Building size={24} />}
            title="Court Representation Services"
          >
            <p> Our Court Representation Services Include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Petition Drafting and Filing</li>
              <li>Defending and Responding</li>
              <li>Pleading and Argumentation </li>
              <li>Full Legal Representation</li>
              <li>Case Monitoring and Updates</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Factory size={24} />}
            title="Professional Legal Drafting Services"
          >
            <p>
              Our team provides meticulously crafted legal documents including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contracts, agreements, and MoUs</li>
              <li>Legal notices and affidavits</li>
              <li>Applications, rejoinders, and counter-petitions</li>
              <li>Bail applications and defense submissions</li>
              <li>Legal opinions and due diligence reports</li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={<Briefcase size={24} />}
            title=" Litigation Practice Areas"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p> We handle a wide range of legal disputes including:</p>
              <li>Civil and Property Disputes</li>
              <li>Family Law, Criminal Defense</li>
              <li>Commercial and Contractual Disputes</li>
              <li>Administrative and Writ Cases</li>
              <li>Labor and Employment Cases</li>
              <li>Human Rights and Public Interest Litigation (PIL)</li>
              <li>Authorized Translation and Notary Public Service</li>
            </ul>
            <p>
              Lawyers’ Point provides reliable, legally recognized Authorized
              Translation and Notary Services through licensed professionals
              certified by the Nepal Notary Public Council. We deliver accurate,
              authentic, and confidential translations for official, academic,
              and corporate needs.
            </p>
          </InfoBox>

          <InfoBox
            icon={<PlaneTakeoff size={24} />}
            title="Authorized Translation of Official Documents"
          >
            <p>We provide legally certified translations including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Citizenship Certificates & Legal Documents</li>
              <li>Birth, Marriage, and Death Certificates</li>
              <li>Land Ownership Certificates / Registration deed</li>
              <li>Bill book of vehicles, Insurance policies, mortgage deeds</li>
              <li>MoA and AoA of the company</li>
              <li>Police Reports and Medical Certificates</li>
              <li>Immigration and Visa Support Documents</li>
            </ul>
            <p>
              All official translations are completed and attested by Authorized
              Translators and verified with our Notary Public Seal. They meet
              the requirements of government bodies, embassies, immigration
              offices, academic institutions, and courts.
            </p>
          </InfoBox>

          <InfoBox
            icon={<Globe2 size={24} />}
            title="Certification and Attestation Services"
          >
            <ul className="list-disc pl-6 space-y-1">
              <p>We provide:</p>
              <li>
                Certification of translated documents for use in Nepal and
                abroad
              </li>
              <li>Attestation and notarization by a licensed Notary Public</li>
              <li>
                Support for documentation required for embassy submissions, visa
                interviews, foreign admissions, and legal proceedings
              </li>
            </ul>
          </InfoBox>
        </div>
      </section>
      <Footer />
    </main>
  );
}
