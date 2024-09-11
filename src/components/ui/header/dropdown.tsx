"use client";

import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import { HeaderContext } from "./wrapper";

export default function Dropdown({
  children,
}: {
  children: React.ReactNode[];
}) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useContext(HeaderContext);

  useLayoutEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        data-collapse-toggle="mobile-menu"
        type="button"
        className="md:hidden text-inherit ml-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          "fixed top-[68px] px-6 bg-foreground inset-x-0 w-full",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {children}
      </div>
    </>
  );
}
