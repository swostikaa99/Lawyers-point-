import React, { useState } from "react";
import {
  Scale,
  Building2,
  FileText,
  Globe,
  Gavel,
  Users,
  BookOpen,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Practice({
  itemsPerPage = 6,
  showPagination = true,
  showLink = false,
  linkHref = "/practice",
}) {
  // 1️⃣ Define data first
  const practiceAreas = [
    {
      icon: Gavel,
      title: "Litigation",
      description:
        "Comprehensive litigation services covering civil, criminal, and commercial disputes. Our experienced advocates represent clients at all court levels.",
      services: [
        "Civil Litigation",
        "Criminal Defense",
        "Commercial Disputes",
        "Appeals",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Governance",
      description:
        "Expert guidance on corporate structuring, compliance, and governance frameworks for businesses of all sizes.",
      services: [
        "Company Formation",
        "Board Advisory",
        "Compliance Audits",
        "Corporate Restructuring",
      ],
    },
    {
      icon: FileText,
      title: "Policy Drafting",
      description:
        "Professional policy development and drafting services for organizations, NGOs, and government bodies.",
      services: [
        "Policy Development",
        "Legal Documentation",
        "Regulatory Compliance",
        "Standard Operating Procedures",
      ],
    },
    {
      icon: Globe,
      title: "Business Development",
      description:
        "Strategic legal support for business expansion, partnerships, and market entry in Nepal and beyond.",
      services: [
        "Market Entry Strategy",
        "Partnership Agreements",
        "Due Diligence",
        "Business Licensing",
      ],
    },
    {
      icon: BookOpen,
      title: "Translation & Notary",
      description:
        "Certified translation services and notary public services for legal documents and official paperwork.",
      services: [
        "Document Translation",
        "Notarization",
        "Apostille Services",
        "Certification",
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description:
        "Protection and management of intellectual property rights including trademarks, copyrights, and patents.",
      services: [
        "Trademark Registration",
        "Copyright Protection",
        "Patent Filing",
        "IP Litigation",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description:
        "Sensitive handling of family matters including divorce, custody, inheritance, and property disputes.",
      services: [
        "Divorce Proceedings",
        "Child Custody",
        "Inheritance Matters",
        "Property Division",
      ],
    },
    {
      icon: Scale,
      title: "Alternative Dispute Resolution",
      description:
        "Mediation and arbitration services for efficient resolution of disputes outside the courtroom.",
      services: [
        "Mediation",
        "Arbitration",
        "Negotiation",
        "Settlement Agreements",
      ],
    },
  ];

  // 2️⃣ Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(practiceAreas.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAreas = practiceAreas.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container mx-auto px-8 py-12">
      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedAreas.map((area, index) => (
          <div
            key={area.title}
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-secondary transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
              <area.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              {area.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {area.description}
            </p>
            <ul className="space-y-2">
              {area.services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* View More Link */}
      {showLink && (
        <div className="mt-6 text-right">
          <Link
            to="/about"
            className="text-[#d39b63] font-medium font-semibold"
          >
            View more →
          </Link>
        </div>
      )}
    </div>
  );
}
