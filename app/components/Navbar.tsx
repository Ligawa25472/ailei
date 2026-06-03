"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import academyLogo from "@/assets/academy-logo.png";

const leftLinks = [
  {
    label: "Entertainment",
    children: [
      { label: "Entertainment Workshops", href: "/cruise-ship-entertainment" },
      { label: "Seven Seas Stars", href: "/seven-seas-stars" },
    ],
  },
  {
    label: "STCW Courses",
    children: [
      { label: "STCW Courses", href: "/stcw-courses" },
      { label: "STCW Online Courses", href: "/stcw-online-courses" },
      { label: "Deckhand Courses", href: "/deckhand-courses" },
    ],
  },
  {
    label: "Yacht Courses",
    children: [
      { label: "Yacht Deckhand Courses", href: "/yacht-deckhand-courses" },
      { label: "Yacht Interior Courses", href: "/yacht-interior-courses" },
    ],
  },
];

const rightLinks = [
  { label: "Captains License", href: "/captains-license" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const allLinks: Array<{ label: string; href?: string; children?: { label: string; href: string }[] }> = [...leftLinks, ...rightLinks];

const NavDropdown = ({ link, openDropdown, setOpenDropdown }: { link: any; openDropdown: string | null; setOpenDropdown: (v: string | null) => void }) => (
  <div
    className="relative group"
    onMouseEnter={() => setOpenDropdown(link.label)}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    <button className="flex items-center gap-1 px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
      {link.label}
      <ChevronDown className="h-3 w-3" />
    </button>
    <AnimatePresence>
      {openDropdown === link.label && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute top-full left-0 bg-background border border-border shadow-maritime-lg min-w-[220px] overflow-hidden z-50"
        >
          {link.children.map((child: any) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-3 text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex items-center justify-center py-6">
          <div className="flex items-center gap-1">
            {leftLinks.map((link) => (
              <NavDropdown key={link.label} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            ))}
          </div>
          <Link href="/" className="flex flex-col items-center mx-10">
            <Image src={academyLogo} alt="Ahlei" className="h-24 w-24 mb-2" width={96} height={96} />
            <span className="font-display text-lg font-semibold tracking-[0.15em] uppercase text-navy">Ahlei</span>
            <span className="font-display text-[10px] font-medium tracking-[0.35em] uppercase text-muted-foreground"></span>
          </Link>
          <div className="flex items-center gap-1">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={academyLogo} alt="Ahlei" className="h-12 w-12" width={48} height={48} />
            <div>
              <span className="font-display text-sm tracking-wider text-navy">AHLEI</span>
              <span className="block font-display text-[9px] tracking-[0.3em] text-muted-foreground">PREPARATORY ACADEMY</span>
            </div>
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-2">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 space-y-1">
              {allLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted-foreground"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4">
                        {link.children.map((child: any) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs font-body tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
