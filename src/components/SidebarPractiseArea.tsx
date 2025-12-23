import { useLocation, Link as RouterLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const practiceAreas = [
  { id: 1, name: "Business Development Service" },
  { id: 2, name: "Policy Drafting & Review Services" },
  { id: 3, name: "Asset Management Services" },
  { id: 4, name: "Corporate Management Services" },
  { id: 5, name: "Litigation Services" },
  { id: 6, name: "IT Support & Facilitation" },
  { id: 7, name: "Professional Translation Services" },
];

export default function SidebarPractiseArea() {
  const location = useLocation();

  return (
    <div className="bg-gray-50 min-h-screen w-[280px] p-4 border-r border-gray-200">
      <div className="flex flex-col gap-4">
        {practiceAreas.map((item) => {
          const active = location.pathname === `/service/${item.id}`;

          return (
            <RouterLink
              key={item.id}
              to={`/service/${item.id}`}
              className={`
                flex items-center justify-between px-4 py-3 rounded-xl font-semibold 
                shadow-sm transition-all
                ${
                  active
                    ? "bg-[#09357b] text-white shadow-md"
                    : "bg-white text-[#09357b]"
                }
                hover:bg-[#e86f07] hover:text-white
              `}
            >
              <span className="font-mono text-md">{item.name}</span>
              <ChevronRight className="w-5 h-5" />
            </RouterLink>
          );
        })}
      </div>
    </div>
  );
}
