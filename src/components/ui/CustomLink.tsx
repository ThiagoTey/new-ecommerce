import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const CustomLink = ({ href, children, className }: CustomLinkProps) => {
  return (
    <Link
      className={`font-light text-gray-600 hover:underline ${className}`}
      href={href}
    >
      {" "}
      {children}
    </Link>
  );
};

export default CustomLink;
