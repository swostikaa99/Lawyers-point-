import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What legal services does Lawyers’ Point provide?",
    answer:
      "Lawyers’ Point is a multidisciplinary legal consultancy firm offering services in Business Development, Policy Drafting and Review, Asset Management, Corporate Management, Litigation, Translation & Notary Services, and IT Support through Anoop Innovations.",
  },
  {
    question: "Do you provide legal consultation for businesses and startups?",
    answer:
      "Yes. We provide end-to-end legal and strategic consultation for startups, SMEs, and established businesses, including company registration, compliance, policy development, contract drafting, and corporate governance.",
  },
  {
    question: "Do you handle litigation and court representation?",
    answer:
      "Yes. Our litigation services cover civil, criminal, corporate, and administrative matters. We represent clients before courts, tribunals, and quasi-judicial bodies across Nepal.",
  },
  {
    question: "Do you offer policy drafting and review services?",
    answer:
      "Absolutely. We specialize in drafting, reviewing, and periodically evaluating policies related to business operations, financial institutions, agricultural infrastructure, warehouse receipt financing (WRF), and public-sector governance.",
  },
  {
    question: "Are translation and notary services available?",
    answer:
      "Yes. We provide certified legal translation and notary services for contracts, agreements, affidavits, corporate documents, and official records.",
  },
  {
    question: "How can I schedule a consultation with Lawyers’ Point?",
    answer:
      "You can schedule a consultation by contacting us through our website, email, or phone. Our team will respond promptly to arrange a meeting at your convenience.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. Client confidentiality is a fundamental principle of our practice. All information shared with Lawyers’ Point is handled with strict professional and legal confidentiality.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PageHeader title="FAQ" subtitle="Frequently Asked Questions" />
      <section className="faq-section" style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "30px" }}>
            Frequently Asked Questions
          </h2>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  padding: "15px 0",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    background: "none",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>

                {activeIndex === index && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#555",
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQ;
