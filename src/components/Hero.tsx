import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-fade-in-up font-bold"
          style={{ animationDelay: "0.1s" }}
        >
          Lawyers' Point: <span className="text-secondary">Your Legally</span>
        </h1>
        <p
          className="text-primary-foreground/90 text-lg md:text-xl mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Business Development • Policy Drafting • Litigation • IT Support &
          More
        </p>
        <a
          href="/contact"
          className="inline-block bg-secondary text-secondary-foreground px-10 py-4 font-semibold tracking-wider uppercase hover:bg-gold-dark transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
