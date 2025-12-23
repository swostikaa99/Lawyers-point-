import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import aboutImage from "@/assets/about-image.jpg";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import { useEffect, useState } from "react";

/* =======================
   Core Values Data
======================= */
const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our legal practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every case and consultation we handle.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Our clients' needs and interests are at the heart of everything we do.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "We believe legal services should be accessible to everyone.",
  },
];

function Counter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <p className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">
      {count}
      {suffix}
    </p>
  );
}

/* =======================
   About Page
======================= */
const About = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      <PageHeader
        title="About Us"
        subtitle="Learn more about our firm and our commitment to justice"
      />

      {/* =======================
         Story Section
      ======================= */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <img
                src={aboutImage}
                alt="Lady Justice"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary rounded-lg -z-10" />
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
                <div className="w-20 h-1 bg-[#d39b63] rounded-md mt-2 mb-8" />
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Lawyers' Point</strong>{" "}
                  was established in 2019 with a vision to provide accessible,
                  ethical, and professional legal services across multiple
                  domains in Nepal.
                </p>

                <p>
                  With a strong foundation in litigation, corporate governance,
                  business development, policy consulting, translation, and
                  notary public services, we have grown to serve a diverse
                  clientele ranging from individuals and entrepreneurs to
                  government institutions and international development
                  partners.
                </p>

                <p>
                  Led by{" "}
                  <strong className="text-foreground">
                    Mr. Jyoti Adhikari
                  </strong>
                  —a licensed Advocate, Translator & Notary—our team includes
                  experienced lawyers, policy experts, and consultants who bring
                  professionalism and integrity to every case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
         Values Section
      ======================= */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-secondary mx-auto mb-4 mt-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 p-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm p-2 mb-4">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                end: 500,
                label: "Cases Handled",
                suffix: "+",
                icon: CheckCircle,
              },
              { end: 6, label: "Years Experience", suffix: "+", icon: Award },
              { end: 100, label: "Happy Clients", suffix: "+", icon: Users },
              { end: 10, label: "Team Members", suffix: "+", icon: Globe },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon
                  className="mx-auto mb-5"
                  style={{
                    background: "#e37e19ff",
                    padding: 18,
                    width: 80,
                    height: 70,
                    color: "#ffffff",
                    borderRadius: 20,
                  }}
                />
                <Counter
                  end={stat.end}
                  duration={1500 + stat.end * 4}
                  suffix={stat.suffix}
                />
                <p className="text-primary-foreground/80 text-black font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
