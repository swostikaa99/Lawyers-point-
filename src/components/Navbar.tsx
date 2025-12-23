import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "ABOUT US", href: "/about" },
  { name: "PRACTICE AREAS", href: "/practice-areas" },
  { name: "OUR TEAMS", href: "/our-teams" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
];

const practiceAreas = [
  { name: "Business Development Services (BDS)", href: "/BDS" },
  {
    name: "Policy Drafting, Review, Periodic Evaluation & Consultation Services",
    href: "/policy-drafting",
  },
  { name: "Asset Management Services", href: "/asset-management" },
  { name: "Corporate Management Services", href: "/corporate-management" },
  { name: "Litigation Services", href: "/litigation" },
  {
    name: "Authorized Translation and Notary Public Service",
    href: "/translation-notary",
  },
  {
    name: "Other Professional Translation Services",
    href: "/professional-translation",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary py-4 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Lawyers' Point" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className="text-secondary hover:text-[#ffb670] transition"
          >
            <Home className="h-6 w-6" />
          </Link>

          <div className="h-6 w-px bg-secondary/50" />

          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-6">
              {/* PRACTICE AREAS DROPDOWN */}
              {link.name === "PRACTICE AREAS" ? (
                <div className="relative group">
                  <Link
                    to={link.href}
                    className={`transition-colors font-medium tracking-wide text-sm ${
                      location.pathname.startsWith("/practice-areas")
                        ? "text-[#ffb670]"
                        : "text-primary-foreground hover:text-[#ffb670]" // FIXED 🔥
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-3 w-[370px] bg-[#0d1b60] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <ul className="py-3 px-4 space-y-1">
                      {practiceAreas.map((area) => (
                        <li key={area.name}>
                          <Link
                            to={area.href}
                            className="block text-white text-[13px] font-semibold px-3 py-2 rounded hover:bg-[#ffb670] hover:text-[#23283a] transition" // font size ↓
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`font-medium tracking-wide text-sm transition ${
                    location.pathname === link.href
                      ? "text-[#ffb670]"
                      : "text-primary-foreground hover:text-[#ffb670]"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {index !== navLinks.length - 1 && (
                <div className="h-6 w-px bg-secondary/50" />
              )}
            </div>
          ))}
        </div>

        {/* Search Bar Desktop */}
        <div className="hidden lg:flex items-center gap-2 border-b border-muted-foreground/50 pb-1">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Here..."
            className="bg-transparent text-primary-foreground placeholder:text-muted-foreground focus:outline-none text-sm w-32"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-muted-foreground/20 pt-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium px-4 ${
                  location.pathname === link.href
                    ? "text-[#ffb670]"
                    : "text-primary-foreground hover:text-[#ffb670]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
