interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-primary py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 20px
          )`
        }} />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg md:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
