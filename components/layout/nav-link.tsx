import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-mdtext-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}
