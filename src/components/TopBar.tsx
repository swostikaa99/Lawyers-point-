import { MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-dark py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-primary-foreground text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          <span>Lawyer's Point, 3rd Floor, Putalisadak, Kathmandu</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-secondary transition-colors">Login</a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="hover:text-secondary transition-colors">Register</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
