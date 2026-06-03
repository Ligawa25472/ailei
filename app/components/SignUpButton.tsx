"use client";

import Link from "next/link";

const SignUpButton = ({ to = "/course-schedule" }: { to?: string }) => (
  <div className="flex justify-center py-10">
    <Link
      href={to}
      className="inline-block px-16 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
    >
      Sign Up Now
    </Link>
  </div>
);

export default SignUpButton;
