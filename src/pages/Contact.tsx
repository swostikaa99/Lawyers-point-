import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our legal team"
      />

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="animate-fade-in-up">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our legal services? Need a consultation?
                  We're here to help. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Our Office
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Lawyer's Point, 3rd Floor
                      <br />
                      Putalisadak, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+977-9841234567"
                      className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                    >
                      +977-9841234567
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@lawyerspoint.com.np"
                      className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                    >
                      info@lawyerspoint.com.np
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Sun - Thu: 9:00 AM - 6:00 PM
                      <br />
                      Fri: 10:00 AM - 2:00 PM
                      <br />
                      Sat: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                        placeholder="+977-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="consultation">Legal Consultation</option>
                        <option value="litigation">Litigation Services</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="family">Family Law</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-secondary text-secondary-foreground px-10 py-4 font-semibold tracking-wider uppercase hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1678.80578029918!2d85.321947!3d27.705201!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzE4LjciTiA4NcKwMTknMjEuMyJF!5e1!3m2!1sen!2snp!4v1765093724417!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lawyers' Point Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-4 left-4 bg-card p-4 rounded-lg shadow-lg">
          <h3 className="font-heading font-bold text-foreground">
            Lawyers' Point
          </h3>
          <p className="text-muted-foreground text-sm">
            Putalisadak, Kathmandu
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
