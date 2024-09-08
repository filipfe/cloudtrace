"use client";

import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";

const lightHeaderPaths = ["/contact-us"];

export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        lightHeaderPaths.includes(pathname) ? "text-foreground" : "text-white"
      )}
    >
      {children}
    </div>
  );
}
