"use client";

import { cn } from "@/lib/utils/cn";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = { children: React.ReactNode; title: string };

export default function Submenu({ title, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (!ref.current) return;
      setIsOpen(ref.current.contains(e.target as Node));
    };
    window.addEventListener("click", cb);
    return () => {
      window.removeEventListener("click", cb);
    };
  }, []);

  useLayoutEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative self-stretch flex items-center" ref={ref}>
      <button
        className="text-[#262E45] relative hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-primary md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
        onClick={() => setIsOpen(true)}
      >
        {title}
        <svg
          className="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          "absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-35 dark:bg-gray-700 block",
          !isOpen && "sr-only"
        )}
      >
        {children}
      </div>
    </div>
  );
}

// const NavLink = ({ title, href }: Page) => <Link href={href}>{title}</Link>;
