import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Gavel, Globe, Scale } from "lucide-react";

const impactsData = [
  {
    id: 1,
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    id: 2,
    icon: Gavel,
    value: "1200+",
    label: "Cases Handled",
  },
  {
    id: 3,
    icon: Globe,
    value: "50+",
    label: "Countries Reached",
  },
  {
    id: 4,
    icon: Scale,
    value: "95%",
    label: "Success Rate",
  },
];

// Counter: animates from 0 to `end` and appends `suffix`
function Counter({
  end,
  duration = 1500,
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
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <h3 className="text-3xl font-bold text-foreground">
      {count}
      {suffix}
    </h3>
  );
}

export default function Impacts() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
          Our Impacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactsData.map((impact, index) => {
            const match = String(impact.value).match(/[\d,]+/);
            const numeric = match
              ? parseInt(match[0].replace(/,/g, ""), 10)
              : 0;
            const suffix = String(impact.value).replace(
              match ? match[0] : "",
              ""
            );
            return (
              <motion.div
                key={impact.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
              >
                <impact.icon className="h-12 w-12 text-secondary mb-2" />
                <Counter
                  end={numeric}
                  duration={1200 + index * 200}
                  suffix={suffix}
                />
                <p className="text-muted-foreground">{impact.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
