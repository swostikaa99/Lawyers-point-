import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[#c68c50] py-16 px-4 md:px-10 lg:px-16 text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-xl font-semibold flex-1 min-w-[250px]">
            If you have any legal problem in your life ... We are available
          </h2>

          <button className="border border-white text-white px-6 py-3 hover:bg-white hover:text-[#c68c50] transition rounded">
            <a href="/contact"> GET FREE CONSULTATION</a>
          </button>
        </div>
      </div>
      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-20 py-14 bg-[#141f38]">
        {/* About Section */}
        <div>
          <img
            src={logo}
            alt="Lawyers Point Logo"
            className="w-[100px] h-[100px] rounded-full object-contain mb-4"
          />

          <h3 className="text-xl font-semibold mb-3">Lawyer's Point</h3>

          <p className="text-sm leading-relaxed mb-4">
            Lawyers’ Point is a multidisciplinary and inclusive legal
            consultancy firm based in Nepal, established in 2019 with a vision
            to provide accessible, ethical, and professional legal services
            across multiple domains.
          </p>

          <div className="flex items-center gap-3 flex-wrap mt-4">
            {[Instagram, Linkedin, Twitter, Youtube, Facebook].map(
              (IconComp, idx) => (
                <div
                  key={idx}
                  className="border border-[#c68c50] p-2 rounded-full cursor-pointer hover:bg-[#c68c50] hover:text-black transition"
                >
                  <IconComp size={18} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-xl font-semibold mb-3 mt-3">Our Practise Area</h3>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              {" "}
              <a href="/BDS" className="hover:text-blue-500 hover:underline">
                Business Development Service
              </a>
            </li>
            <li>
              <a
                href="/Policy-Drafting"
                className="hover:text-blue-500 hover:underline"
              >
                Policy Drafting, Review Services
              </a>
            </li>
            <li>
              <a
                href="/asset-management"
                className="hover:text-blue-500 hover:underline"
              >
                Asset Management Services
              </a>
            </li>
            <li>
              <a
                href="/corporate-management"
                className="hover:text-blue-500 hover:underline"
              >
                Corporate Management Services
              </a>
            </li>
            <li>
              <a
                href="/litigation"
                className="hover:text-blue-500 hover:underline"
              >
                Litigation Services
              </a>
            </li>
            <li>
              <a
                href="/IT-support"
                className="hover:text-blue-500 hover:underline"
              >
                IT Support & Facilitation for Business Development
              </a>
            </li>
            <li>
              <a
                href="/professional-translation"
                className="hover:text-blue-500 hover:underline"
              >
                Other Professional Translation Services
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 mt-3">Useful Links</h3>

          <ul className="flex flex-col gap-2 text-sm ">
            <li>
              <a href="/about" className="hover:text-blue-500 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-500 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-500 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500 hover:underline">
                News & Notice
              </a>
            </li>
            <li>
              <a
                href="/our-teams"
                className="hover:text-blue-500 hover:underline"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-blue-500 hover:underline"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 mt-3">
            Lawyer's Point Pvt. Ltd.
          </h3>

          <ul className="text-sm leading-relaxed">
            <li>Lawyer's Point , 3rd Floor , Putalisadak, </li>
            <li>Kathmandu, Nepal</li>
            <li>015345916,</li>
            <li>9851111635,</li>
            <li> 9808019632</li>
            <li>
              <a
                href="mailto:info@lawyerspoint.com.np"
                className="hover:text-blue-500 hover:underline"
              >
                info@lawyerspoint.com.np
              </a>{" "}
              /{" "}
              <a
                href="mailto:legalnotary14@gmail.com"
                className="hover:text-blue-500 hover:underline"
              >
                legalnotary14@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}

      <div className="text-center py-4 border-t border-[#333] text-white/70 text-sm">
        Legal's Point © {new Date().getFullYear()} All rights reserved | Powered
        by {""}
        <a
          href="https://anoopinnovations.com/"
          className="hover:text-white underline"
        >
          Anoop Innovations
        </a>
      </div>
    </div>
  );
}
