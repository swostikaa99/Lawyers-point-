import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, Linkedin } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const teamMembers = [
  {
    name: "Mr. Jyoti Adhikari",
    role: "Founder & Lead Advocate",
    image: team1,
    description: "Licensed Advocate, Translator & Notary with over 15 years of experience in litigation and corporate law.",
    specializations: ["Litigation", "Corporate Law", "Notary Services"],
  },
  {
    name: "Ms. Sunita Sharma",
    role: "Senior Associate",
    image: team2,
    description: "Expert in family law and civil litigation with a compassionate approach to sensitive legal matters.",
    specializations: ["Family Law", "Civil Litigation", "Mediation"],
  },
  {
    name: "Mr. Rajesh Thapa",
    role: "Legal Consultant",
    image: team3,
    description: "Specializes in business development and corporate governance for national and international clients.",
    specializations: ["Business Law", "Corporate Governance", "Contracts"],
  },
  {
    name: "Ms. Kamala Devi",
    role: "Policy Expert",
    image: team4,
    description: "Extensive experience in policy drafting and consultation for government and development organizations.",
    specializations: ["Policy Drafting", "Regulatory Affairs", "Compliance"],
  },
];

const OurTeams = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader title="Our Team" subtitle="Meet our experienced legal professionals" />
      
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors">
                        <Mail className="h-5 w-5 text-secondary-foreground" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors">
                        <Phone className="h-5 w-5 text-secondary-foreground" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors">
                        <Linkedin className="h-5 w-5 text-secondary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Join Our Team
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We're always looking for talented legal professionals to join our growing team. If you're passionate about justice and excellence, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block border-2 border-secondary text-secondary px-10 py-4 font-semibold tracking-wider uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurTeams;
