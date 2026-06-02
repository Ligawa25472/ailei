import { Link } from "react-router-dom";

const SignUpButton = ({ to = "/course-schedule" }: { to?: string }) => (
  <div className="flex justify-center py-10">
    <Link
      to={to}
      className="inline-block px-16 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
    >
      Sign Up Now
    </Link>
  </div>
);

export default SignUpButton;
