import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Maritime Training */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Maritime Training</h4>
            <ul className="space-y-2">
              {[
                { label: "STCW Courses", href: "/stcw-courses" },
                { label: "STCW Online Courses", href: "/stcw-online-courses" },
                { label: "Deckhand Courses", href: "/deckhand-courses" },
                { label: "Captain's License", href: "/captains-license" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yacht & Entertainment */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Yacht & Entertainment</h4>
            <ul className="space-y-2">
              {[
                { label: "Yacht Deckhand Courses", href: "/yacht-deckhand-courses" },
                { label: "Yacht Interior Courses", href: "/yacht-interior-courses" },
                { label: "Entertainment Workshops", href: "/cruise-ship-entertainment" },
                { label: "Seven Seas Stars", href: "/seven-seas-stars" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Course Schedule", href: "/course-schedule" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">4077488302</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">courses@ahlei.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="font-body text-sm text-muted-foreground">6236 Kingspointe Pkwy, #1, Orlando, FL 32819</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ahlei. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
