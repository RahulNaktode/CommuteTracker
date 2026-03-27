import { Building2 } from "lucide-react";
import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-12 bg-[#FDA085]">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-6 w-6 text-secondary" />
          <span className="font-display text-lg font-bold text-secondary">CommuteNest</span>
        </div>
        <p className="text-sm leading-relaxed">Find your perfect home based on what matters most — your daily commute.</p>
      </div>
      <div>
        <h4 className="font-display text-secondary mb-3 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-secondary mb-3 text-sm font-semibold uppercase tracking-wider">Contact</h4>
        <div className="text-sm space-y-1">
          <p>123 Market Street, San Francisco, CA 94105</p>
          <p>commutetraker@gmail.com</p>
          <p>91 9922293233</p>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs">
      © {new Date().getFullYear()} CommuteNest. All rights reserved.
    </div>
  </footer>
);

export default Footer;
