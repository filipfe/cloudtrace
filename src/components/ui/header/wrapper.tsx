"use client";

import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";

type HeaderContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderContextType>(null!);

const lightHeaderPaths = ["/contact-us", "/company/careers"];

export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const onScroll = () => setIsDown(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className={cn(
          "transition-colors",
          lightHeaderPaths.includes(pathname)
            ? "text-foreground"
            : "text-white",
          isDown && "bg-foreground text-white",
          isOpen && "max-lg:bg-foreground max-lg:text-white"
        )}
      >
        {children}
      </div>
    </HeaderContext.Provider>
  );
}
