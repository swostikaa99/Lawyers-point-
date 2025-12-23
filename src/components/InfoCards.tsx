import { Phone, Scale, Clock } from "lucide-react";

const InfoCards = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3">
        <div
          className="flex flex-col items-start px-10 py-8"
          style={{ backgroundColor: "#11141c" }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Emergency Cases</h3>
          <p className="text-white mb-8 leading-relaxed max-w-sm text-base">
            For urgent legal assistance or documentation needs, call us now.
          </p>
          <p className="text-white font-semibold mb-2 text-base">Call Us Now</p>
          <a
            href="tel:+977-9841234567"
            className="text-[#d39b63] text-base font-medium"
          >
            +977-9841234567
          </a>
        </div>

        <div
          className="flex flex-col items-start px-10 py-8"
          style={{ backgroundColor: "#23283a" }}
        >
          <h3 className="text-xl font-bold text-white mb-6">
            Need Legal Help?
          </h3>
          <p className="text-white mb-8 leading-relaxed max-w-sm text-base">
            We offer expert guidance in law, policy, business, and IT with a
            multidisciplinary team.
          </p>
          <a
            href="#contact"
            className="border border-[#d39b63] text-[#d39b63] px-6 py-3 font-semibold tracking-wide hover:bg-[#d39b63] hover:text-white transition-all w-fit text-base"
          >
            MAKE AN APPOINTMENT →
          </a>
        </div>

        <div
          className="flex flex-col items-start px-10 py-8"
          style={{ backgroundColor: "#11141c" }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Working Hours</h3>
          <div className="text-white space-y-2 text-base max-w-sm">
            <p>Sunday – Thursday: 9:00 AM – 6:00 PM</p>
            <p>Friday: 10:00 AM – 2:00 PM</p>
            <p>Saturday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
