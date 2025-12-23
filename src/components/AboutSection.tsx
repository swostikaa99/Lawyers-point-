import aboutImage from "@/assets/about-image.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Lady Justice statue with law books"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Us
              <div className="w-24 h-1 bg-[#d39b63] rounded-md mt-2 mb-8" />
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Lawyers' Point</strong> is a
                multidisciplinary and inclusive legal consultancy firm based in
                Nepal, established in 2019 with a vision to provide accessible,
                ethical, and professional legal services across multiple
                domains. With a strong foundation in litigation, corporate
                governance, business development, policy consulting,
                translation, and notary public services, we serve clients from
                individuals and entrepreneurs to government institutions and
                international development partners.
              </p>
              <p>
                Led by{" "}
                <strong className="text-foreground">Mr. Jyoti Adhikari</strong>
                —a licensed Advocate, Translator & Notary—our team includes
                experienced lawyers, policy experts, and consultants serving
                diverse legal and institutional needs with professionalism and
                integrity.
              </p>

              <div className="mt-6 text-right">
                <Link
                  to="/about"
                  className="text-[#d39b63] font-medium font-semibold"
                >
                  View more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
